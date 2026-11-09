import React from 'react';
import { Server, Database, Smartphone, Laptop, Cpu, ShieldCheck, ArrowRight, ArrowDown, Activity, Sparkles, Layers, Box, Globe, FileText, CheckCircle2 } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';

interface ProjectArchitectureDiagramProps {
  type: 'banking' | 'rag' | 'blockchain' | 'agronet' | 'iot';
  title?: string;
}

export const ProjectArchitectureDiagram: React.FC<ProjectArchitectureDiagramProps> = ({ type, title }) => {
  const renderDiagram = () => {
    switch (type) {
      case 'banking':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              {/* Frontend Node */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-center">
                <div className="w-9 h-9 mx-auto rounded-lg bg-red-950/60 border border-red-700/50 flex items-center justify-center text-red-400">
                  <Laptop className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Angular 21 Frontend</h4>
                <p className="text-xs text-zinc-400">Standalone Components &bull; Reactive Forms</p>
                <div className="flex flex-wrap gap-1 justify-center pt-1">
                  <Badge variant="outline" size="sm" mono>AuthGuard</Badge>
                  <Badge variant="outline" size="sm" mono>HTTP Interceptor</Badge>
                  <Badge variant="outline" size="sm" mono>Chart.js</Badge>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex flex-col items-center justify-center text-zinc-500 font-mono text-[11px] space-y-1">
                <span>HTTPS / REST</span>
                <div className="flex items-center gap-1 text-cyan-400">
                  <span className="w-8 h-0.5 bg-cyan-500/40" />
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span className="text-zinc-400">JWT Bearer Token</span>
              </div>

              {/* Backend Node */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-cyan-800/40 space-y-2 text-center">
                <div className="w-9 h-9 mx-auto rounded-lg bg-cyan-950/60 border border-cyan-700/50 flex items-center justify-center text-cyan-400">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">Spring Boot 3.2.4 Backend</h4>
                <p className="text-xs text-zinc-400">Java 21 &bull; Layered Architecture</p>
                <div className="flex flex-wrap gap-1 justify-center pt-1">
                  <Badge variant="cyan" size="sm" mono>Security Filter</Badge>
                  <Badge variant="cyan" size="sm" mono>@Transactional</Badge>
                  <Badge variant="cyan" size="sm" mono>Data JPA</Badge>
                </div>
              </div>
            </div>

            {/* Downward / Connecting Step */}
            <div className="flex items-center justify-center py-1">
              <div className="flex flex-col items-center text-zinc-500 font-mono text-[11px]">
                <ArrowDown className="w-4 h-4 text-cyan-400" />
                <span>ACID Transactions &bull; Optimistic Locking</span>
              </div>
            </div>

            {/* Database Node */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center max-w-md mx-auto space-y-2">
              <div className="w-9 h-9 mx-auto rounded-lg bg-emerald-950/60 border border-emerald-700/50 flex items-center justify-center text-emerald-400">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white">Supabase PostgreSQL Database</h4>
              <p className="text-xs text-zinc-400">Users &bull; Accounts &bull; Transactions &bull; Audit Trails</p>
              <div className="flex flex-wrap gap-1 justify-center pt-1">
                <Badge variant="default" size="sm" mono>Foreign Keys</Badge>
                <Badge variant="default" size="sm" mono>Indexed Timestamps</Badge>
                <Badge variant="default" size="sm" mono>Container Volume</Badge>
              </div>
            </div>
          </div>
        );

      case 'rag':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center">
              {/* Ingestion */}
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <div className="w-8 h-8 mx-auto rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300">
                  <FileText className="w-4 h-4 text-cyan-400" />
                </div>
                <h5 className="text-xs font-semibold text-white">1. Document Parsing</h5>
                <p className="text-[11px] text-zinc-400 leading-tight">PDF &amp; CSV text extraction, stripping non-printable artifacts</p>
              </div>

              {/* Chunking */}
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <div className="w-8 h-8 mx-auto rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300">
                  <Box className="w-4 h-4 text-cyan-400" />
                </div>
                <h5 className="text-xs font-semibold text-white">2. Semantic Chunking</h5>
                <p className="text-[11px] text-zinc-400 leading-tight">Sliding window with 100-char overlap, stored in SQLite via EF Core</p>
              </div>

              {/* Retrieval */}
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-cyan-800/40 space-y-1.5">
                <div className="w-8 h-8 mx-auto rounded-lg bg-cyan-950/60 flex items-center justify-center text-cyan-300">
                  <Activity className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-semibold text-white">3. Keyword Retrieval</h5>
                <p className="text-[11px] text-zinc-400 leading-tight">Query token scoring extracts Top-5 relevant context excerpts</p>
              </div>

              {/* LLM */}
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <div className="w-8 h-8 mx-auto rounded-lg bg-indigo-950/60 flex items-center justify-center text-indigo-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h5 className="text-xs font-semibold text-white">4. Gemini Generation</h5>
                <p className="text-[11px] text-zinc-400 leading-tight">Strict prompt guardrails formulate answers exclusively from context</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] text-center text-xs font-mono text-zinc-400">
              <span className="text-cyan-400">Pipeline Flow:</span> User Upload &rarr; Semantic Chunking &rarr; SQLite Ingestion &rarr; Query Tokenization &rarr; Top-5 Context Injection &rarr; Gemini 2.5 Flash Response
            </div>
          </div>
        );

      case 'blockchain':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {/* On-Chain Component */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-cyan-800/40 space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">On-Chain Layer (Ethereum Geth)</h5>
                    <span className="text-xs font-mono text-cyan-400">Solidity Smart Contracts</span>
                  </div>
                </div>
                <ul className="text-xs text-zinc-400 space-y-1.5">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-400 mt-0.5">&bull;</span>
                    <span>Passenger registration, driver verification, and ride dispatch state machine</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-400 mt-0.5">&bull;</span>
                    <span>Automated fare calculation and escrow payment distribution</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-400 mt-0.5">&bull;</span>
                    <span>Stores 32-byte cryptographic IPFS content hashes for tamper evidence</span>
                  </li>
                </ul>
              </div>

              {/* Off-Chain Component */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-indigo-800/40 space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Off-Chain Layer (IPFS Storage)</h5>
                    <span className="text-xs font-mono text-indigo-400">Decentralized Distributed Cluster</span>
                  </div>
                </div>
                <ul className="text-xs text-zinc-400 space-y-1.5">
                  <li className="flex items-start gap-1.5">
                    <span className="text-indigo-400 mt-0.5">&bull;</span>
                    <span>High-frequency GPS trip telemetry and route waypoint logs</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-indigo-400 mt-0.5">&bull;</span>
                    <span>Encrypted user identity documents and vehicle verification assets</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-indigo-400 mt-0.5">&bull;</span>
                    <span>Reduces on-chain blockchain gas storage costs by &gt;95%</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] text-center text-xs font-mono text-zinc-400">
              <span className="text-cyan-400">Client Interfaces:</span> React Web Portal &bull; Mobile Dispatch App &bull; MetaMask Web3 Cryptographic Signing
            </div>
          </div>
        );

      case 'agronet':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center">
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-cyan-800/40 space-y-1.5">
                <span className="text-xs font-mono text-cyan-400 font-semibold">Custom CNN</span>
                <h5 className="text-sm font-bold text-white">94.12% Accuracy</h5>
                <p className="text-[11px] text-zinc-400">4 Conv Blocks &bull; BatchNorm &bull; ~2.8M Parameters</p>
                <Badge variant="cyan" size="sm" mono>Joint Best Baseline</Badge>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-cyan-800/40 space-y-1.5">
                <span className="text-xs font-mono text-cyan-400 font-semibold">Hybrid AgroNet</span>
                <h5 className="text-sm font-bold text-white">94.12% Accuracy</h5>
                <p className="text-[11px] text-zinc-400">CNN + VGG16 + ViT Feature Concatenation &bull; ~18.5M Param</p>
                <Badge variant="cyan" size="sm" mono>Joint Best Fusion</Badge>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <span className="text-xs font-mono text-zinc-400 font-semibold">VGG16 Transfer</span>
                <h5 className="text-sm font-bold text-white">92.16% Accuracy</h5>
                <p className="text-[11px] text-zinc-400">Pretrained ImageNet early blocks &bull; ~14.7M Parameters</p>
                <Badge variant="default" size="sm" mono>Transfer Learning</Badge>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
                <span className="text-xs font-mono text-zinc-400 font-semibold">Vision Transformer</span>
                <h5 className="text-sm font-bold text-white">90.20% Accuracy</h5>
                <p className="text-[11px] text-zinc-400">16x16 Patches &bull; Multi-Head Self-Attention &bull; ~22.1M Param</p>
                <Badge variant="default" size="sm" mono>Pure Attention</Badge>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] text-center text-xs font-mono text-zinc-400">
              <span className="text-cyan-400">Evaluation Dataset:</span> Kaggle Cucumber Leaf Pathology &bull; 3 Classes: Healthy, Downy Mildew, Powdery Mildew
            </div>
          </div>
        );

      case 'iot':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {/* Sensors */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-red-400" />
                  <h5 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    1. Biomedical Sensors
                  </h5>
                </div>
                <ul className="text-xs text-zinc-400 space-y-1">
                  <li>&bull; <strong className="text-zinc-200">MAX30102:</strong> Pulse Rate &amp; SpO2 (I2C)</li>
                  <li>&bull; <strong className="text-zinc-200">AD8232:</strong> Single-Lead ECG (Analog ADC)</li>
                  <li>&bull; <strong className="text-zinc-200">DS18B20:</strong> Digital Body Temp (OneWire)</li>
                </ul>
              </div>

              {/* Microcontroller */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-cyan-800/40 space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <h5 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    2. ESP32 Microcontroller
                  </h5>
                </div>
                <ul className="text-xs text-zinc-400 space-y-1">
                  <li>&bull; <strong className="text-zinc-200">Core 0:</strong> Sensor sampling &amp; OLED rendering</li>
                  <li>&bull; <strong className="text-zinc-200">Core 1:</strong> Wi-Fi &amp; Cloud synchronization</li>
                  <li>&bull; <strong className="text-zinc-200">Heuristic:</strong> On-device R-peak arrhythmia alert</li>
                </ul>
              </div>

              {/* Cloud Layer */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400" />
                  <h5 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    3. Dual Cloud Telemetry
                  </h5>
                </div>
                <ul className="text-xs text-zinc-400 space-y-1">
                  <li>&bull; <strong className="text-zinc-200">Firebase:</strong> Real-time key-value sync</li>
                  <li>&bull; <strong className="text-zinc-200">ThingSpeak:</strong> Continuous wave visualizer</li>
                  <li>&bull; <strong className="text-zinc-200">Local Web:</strong> On-chip async web dashboard</li>
                </ul>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-zinc-950/80 border border-amber-800/30 text-center text-xs font-mono text-amber-300">
              <span>Prototype Disclaimer:</span> Academic IoT telemetry prototype; not certified for clinical patient monitoring.
            </div>
          </div>
        );
    }
  };

  return (
    <Card className="p-5 sm:p-6 border border-white/[0.08] bg-surface-card/60">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <h4 className="text-sm font-mono uppercase tracking-wider text-white font-semibold">
            {title || 'System Architecture & Data Flow'}
          </h4>
        </div>
        <Badge variant="cyan" size="sm" mono>
          Technical Diagram
        </Badge>
      </div>
      {renderDiagram()}
    </Card>
  );
};

export default ProjectArchitectureDiagram;
