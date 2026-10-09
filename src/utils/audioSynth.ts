/**
 * Pure Web Audio API synthesiser for ambient oceanic waves and resonant temple bronze tone.
 * Operates without external audio files to ensure 100% offline reliability.
 */

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isRunning: boolean = false;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private gainNode: GainNode | null = null;
  private lfoNode: OscillatorNode | null = null;
  private lfoGain: GainNode | null = null;
  private intervalId: number | null = null;

  public init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();
  }

  public toggle(): boolean {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx?.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isRunning;
  }

  private start() {
    if (!this.ctx) return;

    try {
      // 1. Generate pink/ocean noise buffer
      const bufferSize = this.ctx.sampleRate * 4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      // 2. Lowpass filter for deep ocean swell
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(280, this.ctx.currentTime);
      this.filterNode.Q.setValueAtTime(2.5, this.ctx.currentTime);

      // 3. Gentle LFO to simulate rolling ocean wave surges (period ~ 6 seconds)
      this.lfoNode = this.ctx.createOscillator();
      this.lfoNode.frequency.setValueAtTime(0.12, this.ctx.currentTime); // 0.12 Hz wave swell

      this.lfoGain = this.ctx.createGain();
      this.lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);

      this.lfoNode.connect(this.lfoGain);
      this.lfoGain.connect(this.filterNode.frequency);

      // 4. Master ambient volume control
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(0.35, this.ctx.currentTime + 3);

      this.noiseNode.connect(this.filterNode);
      this.filterNode.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      this.noiseNode.start();
      this.lfoNode.start();
      this.isRunning = true;

      // Play soft initial temple chime
      this.playTempleChime(320);

      // Periodically trigger a subtle harmonic resonance chime every 24s
      this.intervalId = window.setInterval(() => {
        if (this.isRunning) {
          const notes = [216, 288, 324, 432];
          const note = notes[Math.floor(Math.random() * notes.length)];
          this.playTempleChime(note);
        }
      }, 24000);

    } catch (e) {
      console.warn('Audio synthesis error:', e);
      this.isRunning = false;
    }
  }

  public playTempleChime(freq = 288) {
    if (!this.ctx || !this.isRunning) return;
    try {
      const osc = this.ctx.createOscillator();
      const bellGain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      bellGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      bellGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 0.05);
      bellGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 4.5);

      osc.connect(bellGain);
      bellGain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + 4.6);
    } catch {
      // Audio error handled silently
    }
  }

  private stop() {
    if (!this.ctx) return;
    try {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      if (this.gainNode) {
        this.gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.8);
      }
      setTimeout(() => {
        try {
          this.noiseNode?.stop();
          this.lfoNode?.stop();
          this.noiseNode?.disconnect();
          this.lfoNode?.disconnect();
        } catch {
          // cleanup
        }
        this.isRunning = false;
      }, 850);
    } catch {
      this.isRunning = false;
    }
  }
}

export const ambientSound = new AmbientSoundEngine();
