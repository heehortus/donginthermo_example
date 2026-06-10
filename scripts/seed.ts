/**
 * 하드코딩 데이터 → Supabase DB 초기 업로드 스크립트
 * 실행: npx tsx --env-file=.env.local scripts/seed.ts
 */
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

// ── 제품 데이터 ──────────────────────────────────────────────────────────────

const products = [
  // VAN
  {
    id: 'dm-090rp',
    name: 'DM-090RP',
    category: 'van',
    tagline: 'Compact rooftop refrigeration for small van-type delivery vehicles.',
    features: [
      'Environment friendly refrigerant R-404A',
      'Rooftop mounting condenser',
      'Ultra slim evaporator',
      'Electric defrost',
      'Optional oil separator',
    ],
    specs: [
      { label: 'Suitable Cargo Volume', value: '3.5 – 8.5 m³' },
      { label: 'Operating Voltage', value: '12V' },
      { label: 'Refrigerant', value: 'R-404A' },
      { label: 'Defrost Method', value: 'Electric' },
      { label: 'Outdoor Unit', value: '620 × 1,005 × 170 mm / 19 kg' },
      { label: 'Indoor Unit', value: '860 × 570 × 140 mm / 14 kg' },
      { label: 'Installation Kit', value: '27 kg' },
      { label: 'Total Weight', value: '60 kg' },
    ],
    performance: [
      { temp: '0°C',   watts: '3,224 W', kcal: '2,722 kcal/h', btu: '11,000 BTU/h' },
      { temp: '-20°C', watts: '1,641 W', kcal: '1,411 kcal/h', btu: '5,600 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 1,
  },
  {
    id: 'dm-110rp',
    name: 'DM-110RP',
    category: 'van',
    tagline: 'High-performance rooftop refrigeration for medium vans.',
    features: [
      'Environment friendly refrigerant R-404A',
      'Rooftop mounting condenser',
      'Ultra slim evaporator',
      'Hot gas automatic defrost',
      'Optional oil separator',
    ],
    specs: [
      { label: 'Compressor', value: 'TM-15 147cc (9 CID)' },
      { label: 'Suitable Cargo Volume', value: '7 – 16 m³' },
      { label: 'Temperature Range', value: '-20°C to 0°C' },
      { label: 'Operating Voltage', value: '12V' },
      { label: 'Power Consumption', value: '360 W' },
      { label: 'Refrigerant', value: 'R-404A (1.3 kg)' },
      { label: 'Defrost Method', value: 'Hot gas automatic' },
      { label: 'Outdoor Unit Weight', value: '20 kg' },
      { label: 'Indoor Unit Weight', value: '20 kg' },
      { label: 'Installation Kit', value: '27 kg' },
      { label: 'Total Weight', value: '67 kg' },
    ],
    performance: [
      { temp: '0°C',   watts: '3,798 W', kcal: '3,266 kcal/h', btu: '12,960 BTU/h' },
      { temp: '-20°C', watts: '2,057 W', kcal: '1,769 kcal/h', btu: '7,020 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 2,
  },
  {
    id: 'dm-250rp',
    name: 'DM-250RP',
    category: 'van',
    tagline: 'Heavy-duty rooftop refrigeration for 2.5–3.5 ton delivery vans.',
    features: [
      'HFC R-134a / Environment friendly refrigerant R-404A',
      'PF Aluminum Coil rooftop mounting condenser',
      'Ultra slim evaporator',
      'Hot gas auto defrost',
      'Optional oil separator',
    ],
    specs: [
      { label: 'Compressor', value: 'TM-16 163cc (10 CID)' },
      { label: 'Suitable Vehicle', value: '2.5 – 3.5 TON' },
      { label: 'Temperature Range', value: 'Down to -20°C' },
      { label: 'Operating Voltage', value: '12 / 24V' },
      { label: 'Power Consumption', value: '300 W' },
      { label: 'Refrigerant', value: 'R-134A / R-404A (1.8 kg)' },
      { label: 'Defrost Method', value: 'Hot gas auto' },
      { label: 'Outdoor Unit Weight', value: '32 kg' },
      { label: 'Indoor Unit Weight', value: '23 kg' },
      { label: 'Installation Kit', value: '25 kg' },
      { label: 'Total Weight', value: '80 kg' },
    ],
    performance: [
      { temp: '1.7°C',   watts: '4,684 W', kcal: '4,028 kcal/h', btu: '15,984 BTU/h' },
      { temp: '-17.8°C', watts: '2,532 W', kcal: '2,117 kcal/h', btu: '8,640 BTU/h' },
    ],
    performance_note: 'R-404A · Ambient: 30°C · Panel: 100mm',
    sort_order: 3,
  },

  // NOSE
  {
    id: 'dm-100s',
    name: 'DM-100S / SP',
    category: 'nose',
    tagline: 'Maximum cooling for small trucks.',
    features: [
      'Environment friendly refrigerant R-404A',
      'Front mounting condenser',
      'ABS case, antirust',
      'Hot gas automatic defrost',
      'Optional standby motor, oil separator, and antifreeze via hot gas',
    ],
    specs: [
      { label: 'Compressor', value: 'TM-15 147cc (9 CID)' },
      { label: 'Suitable Cargo Volume', value: '7 – 16 m³' },
      { label: 'Temperature Range', value: '-20°C to 0°C' },
      { label: 'Operating Voltage', value: '12V' },
      { label: 'Power Consumption', value: '360 W' },
      { label: 'Refrigerant', value: 'R-404A (1.4 kg)' },
      { label: 'Defrost Method', value: 'Hot gas automatic' },
      { label: 'Outdoor Unit Weight', value: '26 kg' },
      { label: 'Indoor Unit Weight', value: '20 kg' },
      { label: 'Installation Kit', value: '24 kg' },
      { label: 'Total Weight', value: '70 kg' },
    ],
    performance: [
      { temp: '0°C',   watts: '3,517 W', kcal: '3,024 kcal/h', btu: '12,000 BTU/h' },
      { temp: '-20°C', watts: '1,905 W', kcal: '1,638 kcal/h', btu: '6,500 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 4,
  },
  {
    id: 'dm-250s',
    name: 'DM-250S / SP',
    category: 'nose',
    tagline: 'Maximum cooling for small and medium trucks.',
    features: [
      'Environment friendly refrigerant R-404A',
      'Front mounting condenser',
      'Hot gas automatic defrost',
      'Optional standby motor and oil separator',
    ],
    specs: [
      { label: 'Compressor', value: 'TM-16 163cc (10 CID)' },
      { label: 'Suitable Cargo Volume', value: '10 – 20 m³' },
      { label: 'Temperature Range', value: '-20°C to 0°C' },
      { label: 'Operating Voltage', value: '24V' },
      { label: 'Power Consumption', value: '600 W' },
      { label: 'Refrigerant', value: 'R-404A (1.8 kg)' },
      { label: 'Defrost Method', value: 'Hot gas automatic' },
      { label: 'Outdoor Unit Weight', value: '33 kg' },
      { label: 'Indoor Unit Weight', value: '23 kg' },
      { label: 'Installation Kit', value: '27 kg' },
      { label: 'Total Weight', value: '83 kg' },
    ],
    performance: [
      { temp: '0°C',   watts: '4,337 W', kcal: '3,730 kcal/h', btu: '14,800 BTU/h' },
      { temp: '-20°C', watts: '2,345 W', kcal: '2,016 kcal/h', btu: '8,000 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 5,
  },
  {
    id: 'dm-500s',
    name: 'DM-500S / SP',
    category: 'nose',
    tagline: 'Maximum cooling for medium trucks.',
    features: [
      'Environment friendly refrigerant R-404A',
      'Ultra slim evaporator',
      'ABS case with maximum load space and high air flow',
      'Hot gas automatic defrost',
      'Optional standby motor and oil separator',
    ],
    specs: [
      { label: 'Compressor', value: 'TM-16 163cc (10 CID)' },
      { label: 'Suitable Cargo Volume', value: '12 – 24 m³' },
      { label: 'Temperature Range', value: '-20°C to 0°C' },
      { label: 'Operating Voltage', value: '24V' },
      { label: 'Power Consumption', value: '600 W' },
      { label: 'Refrigerant', value: 'R-404A (2 kg)' },
      { label: 'Defrost Method', value: 'Hot gas automatic' },
      { label: 'Outdoor Unit Weight', value: '33 kg' },
      { label: 'Indoor Unit Weight', value: '25 kg' },
      { label: 'Installation Kit', value: '27 kg' },
      { label: 'Total Weight', value: '85 kg' },
    ],
    performance: [
      { temp: '0°C',   watts: '4,689 W', kcal: '4,032 kcal/h', btu: '16,000 BTU/h' },
      { temp: '-20°C', watts: '2,559 W', kcal: '2,200 kcal/h', btu: '8,730 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 6,
  },

  // ESC
  {
    id: 'dm-100esc',
    name: 'DM-100ESC',
    category: 'esc',
    tagline: 'Electric standby refrigeration for small trucks.',
    features: [
      'Environment friendly refrigerant R-404A',
      'Front mounting condenser',
      'ABS case, antirust',
      'Wall embedded evaporator',
      'Electric standby connection — 220V or 380V, 50/60 Hz',
      'Optional standby motor and oil separator',
    ],
    specs: [
      { label: 'Compressor', value: 'TM-15 147cc (9 CID)' },
      { label: 'Suitable Cargo Volume', value: '7 – 16 m³' },
      { label: 'Temperature Range', value: '-20°C to 0°C' },
      { label: 'Operating Voltage', value: '12V' },
      { label: 'Power Consumption', value: '360 W' },
      { label: 'Refrigerant', value: 'R-404A (1.4 kg)' },
      { label: 'Standby Power Supply', value: '220V or 380V, 50/60 Hz' },
      { label: 'Defrost Method', value: 'Hot gas automatic' },
      { label: 'Outdoor Unit Weight', value: '100 kg' },
      { label: 'Indoor Unit Weight', value: '20 kg' },
      { label: 'Installation Kit', value: '30 kg' },
      { label: 'Total Weight', value: '150 kg' },
    ],
    performance: [
      { temp: '0°C',   mode: 'Driving', watts: '3,517 W', kcal: '3,024 kcal/h', btu: '12,000 BTU/h' },
      { temp: '0°C',   mode: 'ESC',     watts: '2,673 W', kcal: '2,298 kcal/h', btu: '9,119 BTU/h' },
      { temp: '-20°C', mode: 'Driving', watts: '1,905 W', kcal: '1,638 kcal/h', btu: '6,500 BTU/h' },
      { temp: '-20°C', mode: 'ESC',     watts: '2,000 W', kcal: '902 kcal/h',   btu: '3,579 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 7,
  },
  {
    id: 'dm-250esc',
    name: 'DM-250ESC',
    category: 'esc',
    tagline: 'Electric standby refrigeration for medium trucks.',
    features: [
      'Environment friendly refrigerant R-404A',
      'Front mounting condenser',
      'ABS case, antirust',
      'Wall embedded evaporator',
      'Electric standby connection — 220V or 380V, 50/60 Hz',
      'Optional standby motor and oil separator',
    ],
    specs: [
      { label: 'Compressor', value: 'TM-16 163cc (10 CID)' },
      { label: 'Suitable Cargo Volume', value: '10 – 20 m³' },
      { label: 'Temperature Range', value: '-20°C to 0°C' },
      { label: 'Operating Voltage', value: '12V / 24V' },
      { label: 'Power Consumption', value: '600 W' },
      { label: 'Refrigerant', value: 'R-404A (1.8 kg)' },
      { label: 'Standby Power Supply', value: '220V or 380V, 50/60 Hz' },
      { label: 'Defrost Method', value: 'Hot gas automatic' },
      { label: 'Outdoor Unit', value: '1,230 × 625 × 335 mm / 102 kg' },
      { label: 'Indoor Unit', value: '1,100 × 730 × 185 mm / 23 kg' },
      { label: 'Installation Kit', value: '27 kg' },
      { label: 'Total Weight', value: '152 kg' },
    ],
    performance: [
      { temp: '0°C',   mode: 'Driving', watts: '4,684 W', kcal: '4,028 kcal/h', btu: '15,984 BTU/h' },
      { temp: '0°C',   mode: 'ESC',     watts: '3,223 W', kcal: '2,772 kcal/h', btu: '11,000 BTU/h' },
      { temp: '-20°C', mode: 'Driving', watts: '2,532 W', kcal: '2,177 kcal/h', btu: '8,640 BTU/h' },
      { temp: '-20°C', mode: 'ESC',     watts: '1,436 W', kcal: '1,234 kcal/h', btu: '4,896 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 8,
  },
  {
    id: 'dm-500esc',
    name: 'DM-500ESC',
    category: 'esc',
    tagline: 'High-capacity electric standby refrigeration for large trucks.',
    features: [
      'Environment friendly refrigerant R-404A / R-134A',
      'Ultra slim evaporator',
      'Electric standby connection — 220V or 380V, 50/60 Hz',
      'Optional oil separator, SPR Valve, Temperature Recorder, Heater',
    ],
    specs: [
      { label: 'Compressor', value: 'TM-21 215cc (13.1 CID)' },
      { label: 'Suitable Cargo Volume', value: '12 – 24 m³' },
      { label: 'Temperature Range', value: '-20°C to 0°C' },
      { label: 'Operating Voltage', value: 'DC 12V / 24V' },
      { label: 'Power Consumption', value: '600 W' },
      { label: 'Refrigerant', value: 'R-134A / R-404A (1.6 kg)' },
      { label: 'Standby Power Supply', value: '220V or 380V, 50/60 Hz' },
      { label: 'Defrost Method', value: 'Hot gas automatic' },
      { label: 'Outdoor Unit', value: '1,300 × 620 × 340 mm / 100 kg' },
      { label: 'Indoor Unit', value: '1,100 × 730 × 185 mm / 23 kg' },
      { label: 'Installation Kit', value: '30 kg' },
      { label: 'Total Weight', value: '153 kg' },
    ],
    performance: [
      { temp: '0°C',   mode: 'Driving', watts: '5,931 W', kcal: '5,100 kcal/h', btu: '20,237 BTU/h' },
      { temp: '0°C',   mode: 'ESC',     watts: '4,744 W', kcal: '4,079 kcal/h', btu: '16,186 BTU/h' },
      { temp: '-20°C', mode: 'Driving', watts: '2,874 W', kcal: '2,471 kcal/h', btu: '9,805 BTU/h' },
      { temp: '-20°C', mode: 'ESC',     watts: '2,299 W', kcal: '1,977 kcal/h', btu: '7,844 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 9,
  },

  // SUB
  {
    id: 'ds-450m',
    name: 'DS-450M',
    category: 'sub',
    tagline: 'Self-powered diesel refrigeration for medium trucks (37–47 m³).',
    features: [
      'Self-powered diesel engine, independent from vehicle engine',
      'MONOBLOCK type construction',
      'Environment friendly refrigerant R-404A',
      'Maximum cooling for medium trucks',
    ],
    specs: [
      { label: 'Engine', value: 'Yanmar 3 TNV-70 (Japan)' },
      { label: 'Cylinders / Displacement', value: '3 cyl. / 854 cc' },
      { label: 'Engine Power', value: '15.5 kW / 21 HP' },
      { label: 'Compressor', value: 'BOCK FK30/235TK (2 cyl.)' },
      { label: 'Cooling Capacity at -20°C', value: '2,800 kcal/h' },
      { label: 'Suitable Cargo Volume', value: '37 – 47 m³' },
      { label: 'Refrigerant', value: 'R-404A (4 kg)' },
      { label: 'Operating Voltage', value: '12V' },
    ],
    performance: [
      { temp: '0°C',   watts: '6,047 W', kcal: '5,200 kcal/h', btu: '20,621 BTU/h' },
      { temp: '-20°C', watts: '3,256 W', kcal: '2,800 kcal/h', btu: '11,104 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 10,
  },
  {
    id: 'ds-750m',
    name: 'DS-750M',
    category: 'sub',
    tagline: 'Self-powered diesel refrigeration for large trucks (53–64 m³).',
    features: [
      'Self-powered diesel engine, independent from vehicle engine',
      'MONOBLOCK type construction',
      'Environment friendly refrigerant R-404A',
      'Maximum cooling for large trucks',
    ],
    specs: [
      { label: 'Engine', value: 'Yanmar 3 TNV-76 (Japan)' },
      { label: 'Cylinders / Displacement', value: '3 cyl. / 1,116 cc' },
      { label: 'Engine Power', value: '20.2 kW / 27 HP' },
      { label: 'Compressor', value: 'BOCK FK30/325TK (2 cyl.)' },
      { label: 'Cooling Capacity at -20°C', value: '4,260 kcal/h' },
      { label: 'Suitable Cargo Volume', value: '53 – 64 m³' },
      { label: 'Refrigerant', value: 'R-404A (5 kg)' },
      { label: 'Operating Voltage', value: '12V' },
    ],
    performance: [
      { temp: '0°C',   watts: '8,837 W', kcal: '7,600 kcal/h', btu: '30,139 BTU/h' },
      { temp: '-20°C', watts: '4,953 W', kcal: '4,260 kcal/h', btu: '16,894 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 11,
  },
  {
    id: 'ds-950m',
    name: 'DS-950M',
    category: 'sub',
    tagline: 'Heavy-duty self-powered diesel refrigeration for large cargo (53–64 m³).',
    features: [
      'Self-powered diesel engine, independent from vehicle engine',
      'MONOBLOCK type construction',
      'Environment friendly refrigerant R-404A',
      'Maximum cooling for heavy trucks',
    ],
    specs: [
      { label: 'Engine', value: 'Yanmar 3 TNV-76 (Japan)' },
      { label: 'Cylinders / Displacement', value: '3 cyl. / 1,116 cc' },
      { label: 'Engine Power', value: '20.2 kW / 27 HP' },
      { label: 'Compressor', value: 'BOCK FK30/325TK (2 cyl.)' },
      { label: 'Cooling Capacity at -20°C', value: '4,260 kcal/h' },
      { label: 'Suitable Cargo Volume', value: '53 – 64 m³' },
      { label: 'Refrigerant', value: 'R-404A (5 kg)' },
      { label: 'Operating Voltage', value: '12V' },
    ],
    performance: [
      { temp: '0°C',   watts: '8,837 W', kcal: '7,600 kcal/h', btu: '30,139 BTU/h' },
      { temp: '-20°C', watts: '4,953 W', kcal: '4,260 kcal/h', btu: '16,894 BTU/h' },
    ],
    performance_note: 'Ambient: 30°C · Panel: 100mm',
    sort_order: 12,
  },
]

// ── 인증서 데이터 ─────────────────────────────────────────────────────────────

const certifications = [
  { name: 'CE',                                              category: 'International', sort_order: 1 },
  { name: 'ISO 9001',                                        category: 'International', sort_order: 2 },
  { name: 'RoHS',                                            category: 'International', sort_order: 3 },
  { name: 'ATP',                                             category: 'International', sort_order: 4 },
  { name: 'Certificate of Origin\nExporter Certification',  category: 'Trade',         sort_order: 5 },
  { name: 'Corporate Research\nInstitute Recognition',      category: 'Government',    sort_order: 6 },
  { name: 'Construction\nRegistration Certificate',         category: 'Government',    sort_order: 7 },
  { name: 'Job Creation\nExcellence Enterprise',            category: 'Government',    sort_order: 8 },
  { name: 'Learning-Focused Field\nTraining Leading Enterprise', category: 'Government', sort_order: 9 },
  { name: 'Venture Enterprise\nMembership',                 category: 'Industry',      sort_order: 10 },
  { name: 'Vision Enterprise\nCertificate',                 category: 'Industry',      sort_order: 11 },
  { name: 'Inno-Biz\nTechnology Innovation SME',            category: 'Government',    sort_order: 12 },
  { name: 'Talent Development\nSME Designation',            category: 'Government',    sort_order: 13 },
  { name: 'Kia Partnership\nCertificate',                   category: 'Industry',      sort_order: 14 },
]

// ── 실행 ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('▶ products 삽입 중...')
  const { error: prodError } = await supabase
    .from('products')
    .upsert(products, { onConflict: 'id' })
  if (prodError) {
    console.error('✗ products 오류:', prodError.message)
    process.exit(1)
  }
  console.log(`✓ products ${products.length}건 완료`)

  console.log('▶ certifications 삽입 중...')
  const { error: certError } = await supabase
    .from('certifications')
    .upsert(certifications, { onConflict: 'name' })
  if (certError) {
    console.error('✗ certifications 오류:', certError.message)
    process.exit(1)
  }
  console.log(`✓ certifications ${certifications.length}건 완료`)

  console.log('\n모든 데이터 업로드 완료.')
}

seed()
