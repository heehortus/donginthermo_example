'use client'

import { useInView } from '@/hooks/useInView'

// NOTE: Upload certificate images to Supabase Storage and paste the public URL into imgUrl.
const certifications = [
  { name: 'CE',                                          category: 'International', imgUrl: '' },
  { name: 'ISO 9001',                                    category: 'International', imgUrl: '' },
  { name: 'RoHS',                                        category: 'International', imgUrl: '' },
  { name: 'ATP',                                         category: 'International', imgUrl: '' },
  { name: 'Certificate of Origin\nExporter Certification', category: 'Trade',      imgUrl: '' },
  { name: 'Corporate Research\nInstitute Recognition',   category: 'Government',   imgUrl: '' },
  { name: 'Construction\nRegistration Certificate',      category: 'Government',   imgUrl: '' },
  { name: 'Job Creation\nExcellence Enterprise',         category: 'Government',   imgUrl: '' },
  { name: 'Learning-Focused Field\nTraining Leading Enterprise', category: 'Government', imgUrl: '' },
  { name: 'Venture Enterprise\nMembership',              category: 'Industry',     imgUrl: '' },
  { name: 'Vision Enterprise\nCertificate',              category: 'Industry',     imgUrl: '' },
  { name: 'Inno-Biz\nTechnology Innovation SME',         category: 'Government',   imgUrl: '' },
  { name: 'Talent Development\nSME Designation',         category: 'Government',   imgUrl: '' },
  { name: 'Kia Partnership\nCertificate',                category: 'Industry',     imgUrl: '' },
]

const categoryColor: Record<string, string> = {
  International: 'bg-blue-100 text-blue-700',
  Trade:         'bg-green-100 text-green-700',
  Government:    'bg-orange-100 text-orange-700',
  Industry:      'bg-purple-100 text-purple-700',
}

function CertCard({ cert, index, visible }: { cert: typeof certifications[number]; index: number; visible: boolean }) {
  return (
    <div
      className={`group bg-white rounded-lg border border-gray-100 overflow-hidden hover:border-blue-200 hover:shadow-md transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${Math.min(index * 50, 400)}ms` }}
    >
      {/* Image area — 3:4 ratio */}
      <div className="aspect-[3/4] bg-gray-50 group-hover:bg-blue-50 transition-colors flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {cert.imgUrl ? (
          <img src={cert.imgUrl} alt={cert.name} className="w-full h-full object-cover" />
        ) : (
          <>
            <div className="w-16 h-20 bg-white rounded shadow-sm border border-gray-200 flex flex-col items-center justify-center gap-1.5 mb-3">
              <div className="w-8 h-0.5 bg-gray-200 rounded" />
              <div className="w-10 h-0.5 bg-gray-200 rounded" />
              <div className="w-10 h-0.5 bg-gray-200 rounded" />
              <div className="w-6 h-0.5 bg-gray-200 rounded" />
              <div className="w-8 h-4 bg-blue-100 rounded mt-1" />
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${categoryColor[cert.category]}`}>
              {cert.category}
            </span>
          </>
        )}
      </div>
      {/* Name */}
      <div className="px-4 py-3">
        <p className="text-gray-700 text-xs font-medium leading-snug whitespace-pre-line">{cert.name}</p>
      </div>
    </div>
  )
}

export default function CertPage() {
  const { ref: headRef, inView: headIn } = useInView()
  const { ref: gridRef, inView: gridIn } = useInView()

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={headRef}
          className={`mb-16 transition-all duration-700 ${headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-blue-500 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Certifications
          </p>
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold">
            Domestic &amp; International
            <br />
            Certification Status
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} visible={gridIn} />
          ))}
        </div>
      </div>
    </div>
  )
}
