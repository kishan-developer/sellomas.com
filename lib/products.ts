import type { IconName } from "@/components/Icon";

export type Product = {
  name: string;
  slug: string;
  images: string[];
  description?: string;
};

export type ProductCategory = {
  slug: string;
  title: string;
  icon: IconName;
  text: string;
  products: Product[];
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "electronic",
    title: "Electronic Components",
    icon: "chip",
    text: "Controllers, drives, sensors and power supplies that automate and protect your production line.",
    products: [
      { name: "Thermocouple Wire", slug: "thermocouple-wire", images: ["/products/thermocouple-wire/1.jpg", "/products/thermocouple-wire/2.jpg"], description: "Discover Thermocouple Wire by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "VEICHI SD700 Servo Drive", slug: "veichi-sd700-servo-drive", images: ["/products/veichi-sd700-servo-drive/1.webp", "/products/veichi-sd700-servo-drive/2.jpg", "/products/veichi-sd700-servo-drive/3.jpg", "/products/veichi-sd700-servo-drive/4.jpg", "/products/veichi-sd700-servo-drive/5.jpg"], description: "The VEICHI SD700 series is a high-performance and intelligent servo drive platform perfect for precise motion control in industrial automation. It’s designed for fast dynamic response, easy tuning, robust control even under varying loads, and flexible integration via modern communication interfaces." },
      { name: "Datasensor TL50-W-815", slug: "datasensor-tl50w815", images: ["/products/datasensor-tl50w815/1.jpg", "/products/datasensor-tl50w815/2.jpg"], description: "Discover DATASENSOR TL50-W-815 by DATASENSOR. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Male Female Connector", slug: "male-female", images: ["/products/male-female/1.jpg", "/products/male-female/2.jpg"] },
      { name: "800 SQ A 230 Analog Timer", slug: "800-sq-a-230-analog-timer", images: ["/products/800-sq-a-230-analog-timer/1.jpg", "/products/800-sq-a-230-analog-timer/2.jpg", "/products/800-sq-a-230-analog-timer/3.jpg", "/products/800-sq-a-230-analog-timer/4.jpg"], description: "Discover 800 SQ A 230 Analog Timer by Selec. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Three Phase Transformer 150 VA", slug: "three-phase-transformer-150-va", images: ["/products/three-phase-transformer-150-va/1.jpg", "/products/three-phase-transformer-150-va/2.jpg", "/products/three-phase-transformer-150-va/3.jpg", "/products/three-phase-transformer-150-va/4.jpg"] },
      { name: "Servo Motor Drive", slug: "servo-mptor-drive", images: ["/products/servo-mptor-drive/1.jpg", "/products/servo-mptor-drive/2.jpg", "/products/servo-mptor-drive/3.webp", "/products/servo-mptor-drive/4.webp", "/products/servo-mptor-drive/5.webp", "/products/servo-mptor-drive/6.jpg"] },
      { name: "Analog Panel Meters", slug: "analog-panel-meters", images: ["/products/analog-panel-meters/1.jpg", "/products/analog-panel-meters/2.jpg", "/products/analog-panel-meters/3.webp", "/products/analog-panel-meters/4.jpg"], description: "Discover Analog Panel Meters by Rishabh. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Vibtec GT16", slug: "vibtec-gt16", images: ["/products/vibtec-gt16/1.jpg", "/products/vibtec-gt16/2.jpg"] },
      { name: "Load Cell Controller", slug: "load-cell-controller", images: ["/products/load-cell-controller/1.jpg", "/products/load-cell-controller/2.jpg", "/products/load-cell-controller/3.webp"], description: "Discover Load Cell Controller by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Indicator Light", slug: "indicator-light", images: ["/products/indicator-light/1.jpg", "/products/indicator-light/2.jpg"], description: "Discover INDICATOR LIGHT by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "MNX 12 Contactor", slug: "mnx-12-contactor", images: ["/products/mnx-12-contactor/1.jpg", "/products/mnx-12-contactor/2.jpg", "/products/mnx-12-contactor/3.jpg", "/products/mnx-12-contactor/4.jpg"], description: "Discover MNX 12 Contactor by L & T. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "L&T 3 Pole MNX 9 Contactor", slug: "lt-3-pole-mnx-9-contactor", images: ["/products/lt-3-pole-mnx-9-contactor/1.jpg", "/products/lt-3-pole-mnx-9-contactor/2.jpg", "/products/lt-3-pole-mnx-9-contactor/3.jpg", "/products/lt-3-pole-mnx-9-contactor/4.jpg", "/products/lt-3-pole-mnx-9-contactor/5.jpg"], description: "Discover L&T 3 Pole MNX 9 Contactor by L&T. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "MNX 40A Contactor", slug: "mnx-40a-contactor", images: ["/products/mnx-40a-contactor/1.jpg", "/products/mnx-40a-contactor/2.jpg", "/products/mnx-40a-contactor/3.jpg"], description: "Discover MNX 40A ContactoR by L&T. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "TC513BX", slug: "tc513bx", images: ["/products/tc513bx/1.jpg", "/products/tc513bx/2.webp", "/products/tc513bx/3.jpg"], description: "Discover TC513BX by Selec. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Selec TC-303-AX", slug: "selec-tc303ax", images: ["/products/selec-tc303ax/1.webp", "/products/selec-tc303ax/2.jpg", "/products/selec-tc303ax/3.jpg", "/products/selec-tc303ax/4.jpg", "/products/selec-tc303ax/5.jpg"], description: "Discover Selec TC-303-AX by Selec. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "AC Drive GA700", slug: "ac-drive-ga700", images: ["/products/ac-drive-ga700/1.jpg", "/products/ac-drive-ga700/2.jpg", "/products/ac-drive-ga700/3.jpg", "/products/ac-drive-ga700/4.jpg"], description: "GA700 drives incorporate a variety of features which eliminate the need for peripherals. Together with easy wiring plus smart functions for completing a basic setup in only in 5 minutes, this greatly reduces the time and expenses involved in having a running system. Superior machine performance By incorporating the latest motor control technologies for induction, permanent magnet, and synchronous reluctance motors, the GA700 drives provide superior control performance with minimized energy consumption. Secure operation GA700 drives are built to perform reliably. The robust design featuring coated PCBs allows operation in 50 °C without derating, while machine monitoring functions and an integrated service life time prediction prevent sudden failures. The GA700 thus effectively secures operation and prevents production losses." },
      { name: "ATV310HU15N4E", slug: "atv310hu15n4e", images: ["/products/atv310hu15n4e/1.webp", "/products/atv310hu15n4e/2.jpg", "/products/atv310hu15n4e/3.jpg", "/products/atv310hu15n4e/4.jpg", "/products/atv310hu15n4e/5.jpg", "/products/atv310hu15n4e/6.jpg"], description: "Power: 1.5 kW / 2 HPVoltage: 380–460 V AC, 3‑phaseCurrent: ~4.1 ADimensions: ~143 × 105 × 151 mmWeight: ~1.1 kgProtection: IP20Communication: Modbus RTU (RS‑485)Category: Industrial motor speed controller (VFD)" },
      { name: "3P-5A Overload Relay", slug: "3p-5a-over-load-relay", images: ["/products/3p-5a-over-load-relay/1.jpg", "/products/3p-5a-over-load-relay/2.webp", "/products/3p-5a-over-load-relay/3.webp"] },
      { name: "Thermo Copper Wire", slug: "thermo-copper-wire", images: ["/products/thermo-copper-wire/1.jpg", "/products/thermo-copper-wire/2.webp", "/products/thermo-copper-wire/3.jpg"], description: "Discover THERMO COPPER WIRE by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "3P Contractor", slug: "3p-contractor", images: ["/products/3p-contractor/1.jpg", "/products/3p-contractor/2.webp", "/products/3p-contractor/3.webp"], description: "Discover 3P CONTRACTOR by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Delta VFD 220", slug: "delta-vfd-220", images: ["/products/delta-vfd-220/1.jpg", "/products/delta-vfd-220/2.webp", "/products/delta-vfd-220/3.jpg"], description: "Discover DELTA VFD 220 by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Motor", slug: "motor", images: ["/products/motor/1.jpg", "/products/motor/2.jpg"], description: "Discover MOTOR by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Schneider ATC310 Drive", slug: "schneider-atc-310-drive", images: ["/products/schneider-atc-310-drive/1.webp", "/products/schneider-atc-310-drive/2.webp", "/products/schneider-atc-310-drive/3.jpg"] },
      { name: "Unwinding Proxi", slug: "unwinding-proxi", images: ["/products/unwinding-proxi/1.jpg", "/products/unwinding-proxi/2.jpg"], description: "Discover UNWINDING PROXI by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "S8FS-C10024J Power Supply", slug: "s8fs-c10024j-power-supply", images: ["/products/s8fs-c10024j-power-supply/1.jpg", "/products/s8fs-c10024j-power-supply/2.jpg", "/products/s8fs-c10024j-power-supply/3.jpg", "/products/s8fs-c10024j-power-supply/4.jpg"], description: "Discover S8FS-C10024J Power Supply by OMRON. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Material Sensor", slug: "material-sensor", images: ["/products/material-sensor/1.jpg", "/products/material-sensor/2.jpg", "/products/material-sensor/3.jpg"], description: "Discover MATERIAL SENSOR by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Controller M200 24 I Transistor", slug: "controller-m200-24-i-transistor", images: ["/products/controller-m200-24-i-transistor/1.jpg"], description: "Discover Controller M200 24 I Transistor by SCHNEIDER. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "103WQ Delta HMI", slug: "103wq-delta-hmi", images: ["/products/103wq-delta-hmi/1.jpg", "/products/103wq-delta-hmi/2.jpg", "/products/103wq-delta-hmi/3.jpg"], description: "Mounting Type Panel Mount Display Size 4 inch Country of Origin Made in India Brand Delta Model Number DOP-103WQ Display Resolution 1024x600 Touch Screen Type 65,536 Colors TFT" },
    ],
  },
  {
    slug: "pneumatic",
    title: "Pneumatic Components",
    icon: "pneumatic",
    text: "Cylinders, valves, FRL units and fittings for dependable, leak-free motion control.",
    products: [
      { name: "Solenoid Valve DS255SR61", slug: "solenoid-valve-ds255sr61", images: ["/products/solenoid-valve-ds255sr61/1.jpg", "/products/solenoid-valve-ds255sr61/2.jpg", "/products/solenoid-valve-ds255sr61/3.jpg"], description: "Discover Solenoid Valve DS255SR61 by JANATICS. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Regulator", slug: "regulator", images: ["/products/regulator/1.jpg", "/products/regulator/2.jpg"] },
      { name: "Cylinder 50×80", slug: "cylinder-5080", images: ["/products/cylinder-5080/1.jpg", "/products/cylinder-5080/2.jpg"] },
      { name: "Cylinder 25×25", slug: "cylinder-2525", images: ["/products/cylinder-2525/1.jpg", "/products/cylinder-2525/2.webp", "/products/cylinder-2525/3.jpg"] },
      { name: "Compressor Air Filter S-1/2", slug: "compressor-air-filter-s12", images: ["/products/compressor-air-filter-s12/1.jpg", "/products/compressor-air-filter-s12/2.jpg", "/products/compressor-air-filter-s12/3.jpg", "/products/compressor-air-filter-s12/4.jpg"], description: "Discover COMPRESSOR AIR FILTER S-1/2 by CLASSIC. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Pneumatic Connector 8mm & 6mm", slug: "pneumatic-connector-8-mm-6-mm", images: ["/products/pneumatic-connector-8-mm-6-mm/1.jpg", "/products/pneumatic-connector-8-mm-6-mm/2.jpg", "/products/pneumatic-connector-8-mm-6-mm/3.jpg", "/products/pneumatic-connector-8-mm-6-mm/4.jpg", "/products/pneumatic-connector-8-mm-6-mm/5.webp"] },
      { name: "8mm Pneumatic T", slug: "8-mm-penumatic-t", images: ["/products/8-mm-penumatic-t/1.jpg", "/products/8-mm-penumatic-t/2.jpg", "/products/8-mm-penumatic-t/3.jpg", "/products/8-mm-penumatic-t/4.jpg"] },
      { name: "Compressor Air Brass", slug: "compressor-air-brass", images: ["/products/compressor-air-brass/1.jpg"], description: "Discover COMPRESSOR AIR BRASS by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Solenoid Valve", slug: "solonet-volve", images: ["/products/solonet-volve/1.jpg", "/products/solonet-volve/2.jpg", "/products/solonet-volve/3.jpg"] },
      { name: "FRL Component", slug: "frl-component", images: ["/products/frl-component/1.jpg", "/products/frl-component/2.jpg"], description: "Discover FRL COMPONENT by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Hand Lever Valve G1/2", slug: "hand-lever-valves-g12", images: ["/products/hand-lever-valves-g12/1.jpg", "/products/hand-lever-valves-g12/2.jpg", "/products/hand-lever-valves-g12/3.jpg", "/products/hand-lever-valves-g12/4.jpg"] },
      { name: "Pneumatic", slug: "pneumatic", images: ["/products/pneumatic/1.jpg", "/products/pneumatic/2.jpg", "/products/pneumatic/3.jpg"], description: "Discover PNEUMATIC by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
    ],
  },
  {
    slug: "machinery",
    title: "Industrial Machinery Components",
    icon: "gear",
    text: "Bearings, gears, pulleys, wheels and motors that keep heavy-duty machines turning smoothly.",
    products: [
      { name: "Heater Rod", slug: "heater-rod", images: ["/products/heater-rod/1.jpg", "/products/heater-rod/2.jpg"], description: "Discover HEATER ROD by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Roster Heater Coil", slug: "roster-heater-coil", images: ["/products/roster-heater-coil/1.jpg", "/products/roster-heater-coil/2.jpg", "/products/roster-heater-coil/3.jpg", "/products/roster-heater-coil/4.jpg"], description: "Discover ROSTER HEATER COIL by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Hammer Pulley Small", slug: "hammer-pulli-small", images: ["/products/hammer-pulli-small/1.jpg", "/products/hammer-pulli-small/2.jpg", "/products/hammer-pulli-small/3.jpg"] },
      { name: "Gaskets Packing (Ring Gasket)", slug: "gaskets-packing-ring-gasket", images: ["/products/gaskets-packing-ring-gasket/1.jpg", "/products/gaskets-packing-ring-gasket/2.jpg"], description: "Discover GASKETS PACKING (Ring Gasket) by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Compressor Head - 3 HP", slug: "compressor-hade-3-hp", images: ["/products/compressor-hade-3-hp/1.jpg"] },
      { name: "Single Head Compressor - 3 HP", slug: "single-hade-compressor-3-hp", images: ["/products/single-hade-compressor-3-hp/5.webp"] },
      { name: "Hammer Glass", slug: "hammer-glass", images: ["/products/hammer-glass/1.jpg", "/products/hammer-glass/2.jpg", "/products/hammer-glass/3.jpg", "/products/hammer-glass/4.jpg"], description: "Discover HAMMER GLASS by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "2mm Round Hole Zali SS", slug: "2-mm-round-hole-zali-s-s", images: ["/products/2-mm-round-hole-zali-s-s/1.webp", "/products/2-mm-round-hole-zali-s-s/2.webp", "/products/2-mm-round-hole-zali-s-s/3.webp", "/products/2-mm-round-hole-zali-s-s/4.jpg"] },
      { name: "PVC Bright Seamless Elevator Buckets", slug: "pvc-bright-seamless-elevator-buckets", images: ["/products/pvc-bright-seamless-elevator-buckets/1.webp", "/products/pvc-bright-seamless-elevator-buckets/2.webp", "/products/pvc-bright-seamless-elevator-buckets/3.jpg", "/products/pvc-bright-seamless-elevator-buckets/4.jpg"], description: "Discover PVC Bright Seamless Elevator Buckets by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Vibro Shiftor - 1 HP", slug: "vibro-shiftor-1-hp", images: ["/products/vibro-shiftor-1-hp/1.jpg", "/products/vibro-shiftor-1-hp/2.jpg"], description: "Discover VIBRO SHIFTOR - 1 HP by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "PVC Helical Gear", slug: "pvc-helical-gear", images: ["/products/pvc-helical-gear/1.jpg", "/products/pvc-helical-gear/2.jpg", "/products/pvc-helical-gear/3.jpg"], description: "Discover high-quality PVC helical gears for packing machines. These durable gears offer smooth, low-noise power transmission, ideal for light to medium-duty applications. Enhance the efficiency and performance of your packing machinery with PVC helical gears.\\r\\n\\r\\n\\r\\nDiscover high-quality PVC helical gears for packing machines. These durable gears offer smooth, low-noise power transmission, ideal for light to medium-duty applications. Enhance the efficiency and performance of your packing machinery with PVC helical gears." },
      { name: "Allen Key Bolt (All Sizes Available)", slug: "allen-key-bolt-all-size-available", images: ["/products/allen-key-bolt-all-size-available/1.jpg", "/products/allen-key-bolt-all-size-available/2.jpg", "/products/allen-key-bolt-all-size-available/3.jpg", "/products/allen-key-bolt-all-size-available/4.jpg"] },
      { name: "UCHB210", slug: "uchb210", images: ["/products/uchb210/1.jpg", "/products/uchb210/2.jpg", "/products/uchb210/3.jpg", "/products/uchb210/4.webp"], description: "Discover UCHB210 by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Black Hammer Mill Blades", slug: "black-hammer-mill-blades", images: ["/products/black-hammer-mill-blades/1.jpg"], description: "Discover Black Hammer Mill Blades by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "SS Shaft", slug: "ss-shaft", images: ["/products/ss-shaft/1.jpg", "/products/ss-shaft/2.jpg"], description: "Discover SS SHAFT by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Chain Chakker", slug: "chain-chakker", images: ["/products/chain-chakker/1.jpg", "/products/chain-chakker/2.jpg", "/products/chain-chakker/3.jpg"], description: "Discover Chain Chakker by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Small Pulley", slug: "small-pulley", images: ["/products/small-pulley/1.jpg", "/products/small-pulley/2.jpg"], description: "Discover Small Pulley by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Worm Gearbox", slug: "worm-gearbox", images: ["/products/worm-gearbox/1.jpg", "/products/worm-gearbox/2.jpg", "/products/worm-gearbox/3.jpg", "/products/worm-gearbox/4.jpg"], description: "Discover Worm Gearbox by CLASSIC. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "NMRV Worm Gearbox 90", slug: "nmrv-worm-gear-box-90", images: ["/products/nmrv-worm-gear-box-90/1.jpg", "/products/nmrv-worm-gear-box-90/2.jpg", "/products/nmrv-worm-gear-box-90/3.jpg", "/products/nmrv-worm-gear-box-90/4.jpg", "/products/nmrv-worm-gear-box-90/5.jpg"] },
      { name: "Roaster Oil Pump", slug: "roaster-oil-pump", images: ["/products/roaster-oil-pump/1.jpg", "/products/roaster-oil-pump/2.jpg", "/products/roaster-oil-pump/3.jpg", "/products/roaster-oil-pump/4.jpg", "/products/roaster-oil-pump/5.jpg"], description: "Discover Roaster Oil Pump by Maruti. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Pulverizer Hammer Shaft", slug: "pulverizer-hammer-shaft", images: ["/products/pulverizer-hammer-shaft/1.jpg", "/products/pulverizer-hammer-shaft/2.jpg", "/products/pulverizer-hammer-shaft/3.jpg"], description: "Discover PULVERIZER HAMMER SHAFT by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "1.5mm Stainless Steel Perforated Sheets", slug: "15mm-stainless-steel-perforated-sheets", images: ["/products/15mm-stainless-steel-perforated-sheets/1.webp", "/products/15mm-stainless-steel-perforated-sheets/2.jpg", "/products/15mm-stainless-steel-perforated-sheets/3.webp", "/products/15mm-stainless-steel-perforated-sheets/4.jpg"], description: "Discover 1.5mm Stainless Steel Perforated Sheets by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Cycloidal Gearbox - 2 HP", slug: "cycloidal-gear-box-2-hp", images: ["/products/cycloidal-gear-box-2-hp/1.jpg", "/products/cycloidal-gear-box-2-hp/2.jpg", "/products/cycloidal-gear-box-2-hp/3.jpg", "/products/cycloidal-gear-box-2-hp/4.webp", "/products/cycloidal-gear-box-2-hp/5.webp"] },
      { name: "UC FC 205 Bearing", slug: "uc-fc-205-bearing", images: ["/products/uc-fc-205-bearing/1.jpg", "/products/uc-fc-205-bearing/2.jpg", "/products/uc-fc-205-bearing/3.jpg"], description: "Discover UC FC 205 BEARING by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "UC FC 207 Bearing", slug: "uc-fc-207-bearing", images: ["/products/uc-fc-207-bearing/1.jpg", "/products/uc-fc-207-bearing/2.jpg", "/products/uc-fc-207-bearing/3.jpg"], description: "Discover UC FC 207 BEARING by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "UC FC 212 Bearing", slug: "uc-fc-212-bearing", images: ["/products/uc-fc-212-bearing/1.jpg", "/products/uc-fc-212-bearing/2.jpg"], description: "Discover UC FC 212 BEARING by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "UCP 210 Bearing", slug: "ucp-210-bearing", images: ["/products/ucp-210-bearing/1.jpg", "/products/ucp-210-bearing/2.jpg", "/products/ucp-210-bearing/3.jpg"], description: "Discover UCP 210 BEARING by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Trolley Wheel", slug: "trolly-wheel", images: ["/products/trolly-wheel/1.jpg"] },
      { name: "Heating Tape", slug: "heating-tep", images: ["/products/heating-tep/1.jpg", "/products/heating-tep/2.jpg", "/products/heating-tep/3.jpg", "/products/heating-tep/4.jpg", "/products/heating-tep/5.jpg"] },
      { name: "Compressor Auto Cut Switch", slug: "comressor-auto-cut-switch", images: ["/products/comressor-auto-cut-switch/1.jpg", "/products/comressor-auto-cut-switch/2.jpg", "/products/comressor-auto-cut-switch/3.jpg", "/products/comressor-auto-cut-switch/4.webp", "/products/comressor-auto-cut-switch/5.webp"] },
      { name: "Unwinding Motor", slug: "unwinding-motor", images: ["/products/unwinding-motor/1.jpg", "/products/unwinding-motor/2.jpg", "/products/unwinding-motor/3.jpg"], description: "Discover UNWINDING MOTOR by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Heater Rod (Alt)", slug: "heater-rode", images: ["/products/heater-rode/1.jpg"] },
    ],
  },
  {
    slug: "packing-machine",
    title: "Packing Machines",
    icon: "package",
    text: "Batch coding machines, ink ribbons and marking equipment for fast, reliable product identification.",
    products: [
      { name: "Pulling Belt", slug: "pulling-belt", images: ["/products/pulling-belt/1.jpg", "/products/pulling-belt/2.jpg"], description: "Discover PULLING BELT by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Ink Pad", slug: "ink-pad", images: ["/products/ink-pad/1.jpg"], description: "Discover INK PAD by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Batch Code Machine", slug: "batch-code-machine", images: ["/products/batch-code-machine/1.jpg", "/products/batch-code-machine/2.jpg", "/products/batch-code-machine/3.jpg", "/products/batch-code-machine/4.jpg"], description: "Discover Batch code machine by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Ink & Thinner", slug: "ink-thinner", images: ["/products/ink-thinner/1.jpg", "/products/ink-thinner/2.jpg", "/products/ink-thinner/3.jpg"], description: "Discover Ink & Thinner by Non. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Ribbon Roll for Ribbon Batch Coding", slug: "ribbon-role-for-ribbon-batch-coding", images: ["/products/ribbon-role-for-ribbon-batch-coding/1.jpg", "/products/ribbon-role-for-ribbon-batch-coding/2.jpg"] },
      { name: "Ribbon Batch Coding Machine", slug: "ribbon-batch-coding-machine", images: ["/products/ribbon-batch-coding-machine/1.webp", "/products/ribbon-batch-coding-machine/2.webp", "/products/ribbon-batch-coding-machine/3.webp"], description: "The HP-241 Ribbon Batch Coding Machine is a hot ribbon thermal coder ideal for printing batch numbers, expiry dates and related product information on packaging in food, pharma, cosmetics and FMCG industries. It comes in manual, semi-automatic, and motorised versions, offers adjustable temperature and print speed, and supports a variety of print formats.Use: Prints batch no., MFG date, EXP date, lot no., MRP on packagingPrinting type: Thermal hot ribbon / hot foil stamping (no liquid ink)Industries: Food, Pharma, Cosmetics, FMCG, Packaging" },
      { name: "Double Composer Head", slug: "double-composer-head", images: ["/products/double-composer-head/1.jpg", "/products/double-composer-head/2.jpg", "/products/double-composer-head/3.jpg", "/products/double-composer-head/4.webp", "/products/double-composer-head/5.webp", "/products/double-composer-head/6.webp"], description: "Discover Double Composer Head by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
      { name: "Industries Ink Ribbon for Ribbon Batch Coding Date Printing", slug: "industries-ink-ribbon-for-ribbon-batch-coding-date-printing", images: ["/products/industries-ink-ribbon-for-ribbon-batch-coding-date-printing/1.jpg", "/products/industries-ink-ribbon-for-ribbon-batch-coding-date-printing/2.jpg", "/products/industries-ink-ribbon-for-ribbon-batch-coding-date-printing/3.jpg", "/products/industries-ink-ribbon-for-ribbon-batch-coding-date-printing/4.jpg", "/products/industries-ink-ribbon-for-ribbon-batch-coding-date-printing/5.jpg", "/products/industries-ink-ribbon-for-ribbon-batch-coding-date-printing/6.jpg"], description: "Discover Industries Ink Ribbon for Ribbon Batch Coding Date Printing by Sellomas. Designed for durability, efficiency, and reliability, it's perfect for industrial and professional applications." },
    ],
  },
];

export const ALL_PRODUCTS = PRODUCT_CATEGORIES.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, category: cat })),
);

export function getProduct(slug: string) {
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  return product ? { product, category: product.category } : undefined;
}

export function relatedProducts(slug: string, categorySlug: string, count = 4) {
  return ALL_PRODUCTS.filter((p) => p.slug !== slug && p.category.slug === categorySlug).slice(0, count);
}

export const SERVICES: { title: string; icon: IconName; text: string }[] = [
  { title: "Machinery Consultancy", icon: "users", text: "Guidance for entrepreneurs on selecting the right agro and processing machinery — from building the concept to final completion." },
  { title: "Custom Sourcing", icon: "search", text: "Can't find a part? Share the model or part number and we source genuine replacements from trusted brands." },
  { title: "Technical Support", icon: "wrench", text: "Technical services to agro industries since 2006 — troubleshooting, part matching and upgrade recommendations." },
  { title: "Pan-India Supply", icon: "truck", text: "Reliable dispatch from Varanasi to clients across major Indian states, with careful packing for sensitive components." },
];
