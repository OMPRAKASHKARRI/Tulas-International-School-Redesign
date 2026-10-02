// All copy, figures and URLs below were taken from https://tis.edu.in/ (fetched 2 Oct 2026).
const M = 'https://tis.edu.in/_next/static/media/'
// Each image is served from /public/images first (run `npm run fetch-images`),
// then falls back to the official URL, then to a neutral placeholder.
const img = (file, remote, alt = '') => ({ src: `/images/${file}`, remote, alt })

export const school = {
  name: 'Tulas International School',
  established: 2012,
  phone: '+91-98379 83791',
  phoneHref: 'tel:+91-9837983791',
  landlines: [
    { label: '0135-2699444', href: 'tel:0135-2699444' },
    { label: '0135-2699666', href: 'tel:0135-2699666' },
  ],
  email: 'info@tis.edu.in',
  address: 'Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  mapsUrl: 'https://maps.app.goo.gl/maBF8syXueQkw31E6',
  website: 'https://tis.edu.in/',
  applyUrl: 'https://admission.tis.edu.in',
  brochureUrl: 'https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf',
  virtualTourUrl: 'https://tis.edu.in/virtual-tour/',
  logo: img('school-logo.png', `${M}schoolLogo.95f6e121.png`, 'Tulas International School logo'),
}

export const images = {
  hero: img('campus-og.jpg', 'https://tis.edu.in/images/tis-campus-og.jpg', 'Tulas International School campus in Dehradun'),
  campus: img('campus.png', `${M}campus.e67b1a0a.png`, 'Tulas International School campus'),
  secret: img('at-tis.png', `${M}AtTIS.59351600.png`, 'Students at Tulas International School'),
  gallery: [
    img('gallery-1.webp', `${M}Image%202.0c5295c9.webp`, 'Student life at TIS'),
    img('gallery-polo.webp', `${M}polo.973ddbae.webp`, 'Polo at TIS'),
    img('gallery-karate.webp', `${M}karate.4020fba5.webp`, 'Karate at TIS'),
    img('gallery-swimming.webp', `${M}swimming.6fc81e65.webp`, 'Swimming at TIS'),
    img('gallery-dance.webp', `${M}dance.88843edb.webp`, 'Dance at TIS'),
    img('gallery-2.webp', `${M}Image%201.0a814859.webp`, 'Student life at TIS'),
  ],
}

// Flat list used by scripts/fetch-images.mjs.
export const allImages = [school.logo, images.hero, images.campus, images.secret, ...images.gallery]

export const intro = {
  headline: 'Learning that feels like an adventure.',
  sub: 'A CBSE-affiliated co-educational boarding and day school in Dehradun for boys and girls from Class IV to XII.',
  about: [
    'Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.',
    'Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders. We provide modern facilities and a nurturing environment for students to thrive academically, socially, and culturally.',
  ],
}

export const recognitions = [
  { rank: '#1', place: 'In Dehradun', by: 'Co-Educational Boarding School, Education Today' },
  { rank: '#2', place: 'In Uttarakhand', by: 'Co-Educational Boarding School in North India, Education Today' },
  { rank: '#1', place: 'In North India', by: 'Co-Educational Boarding School, Outlook' },
  { rank: '#4', place: 'In India', by: 'Co-Educational Boarding School, Education Today' },
]

// Icon names resolved in PhilosophySection.
export const philosophy = [
  { icon: 'GraduationCap', title: 'Academic excellence', text: 'A CBSE curriculum built around strong academics and preparing students to be global leaders.' },
  { icon: 'Palette', title: 'Beyond the classroom', text: 'Whether it is academics, music, art, or drama, students are supported and nudged to do more.' },
  { icon: 'Users', title: 'A community that chooses you', text: 'A place to belong, grow and shine, where leadership, innovation and lifelong learning are encouraged.' },
  { icon: 'Globe', title: 'Holistic development', text: 'Education across academics, sport and culture in a nurturing, modern environment.' },
]

export const programs = [
  {
    title: 'CBSE Curriculum',
    meta: 'Class IV – XII',
    text: 'Academic excellence and holistic development, preparing students to be global leaders.',
    image: images.secret,
    cta: { label: 'Download brochure', href: school.brochureUrl },
  },
  {
    title: 'Boarding School',
    meta: 'Boys & girls, co-educational',
    text: 'A residential community with modern facilities and a nurturing environment, supported by 24×7 medical assistance.',
    image: images.campus,
    cta: { label: 'Take the virtual tour', href: school.virtualTourUrl },
  },
  {
    title: 'Day School',
    meta: 'Day boarding option',
    text: 'The same curriculum, campus and opportunities for students who go home at the end of the day.',
    image: images.gallery[0],
    cta: { label: 'Apply now', href: school.applyUrl },
  },
]

export const facilityStats = [
  { icon: 'TreePine', value: '22', label: 'Acre pollution-free campus' },
  { icon: 'Trophy', value: '16+', label: 'Olympic sports' },
  { icon: 'HeartPulse', value: '24×7', label: 'Medical assistance' },
  { icon: 'Users', value: '6:1', label: 'Student–teacher ratio' },
]

export const sports = [
  'Archery', 'Cycling', 'Hockey', 'Swimming', 'Taekwondo', 'Football', 'Shooting Range', 'Horse Riding',
  'Billiards', 'Squash', 'Volleyball', 'Basketball', 'Cricket', 'Lawn Tennis', 'Badminton', 'Table Tennis',
]

export const learning = {
  quote: '“We feel supported in what we do and nudged further to do more.”',
  text: 'At Tulas, we believe in bringing out the best in every student, whether it is academics, music, art, or drama. With the right support and inspiration, creativity finds its way.',
  secret: 'Making learning feel like an adventure, where curiosity leads, creativity thrives, and every day brings something new to discover.',
}

// Parent reviews copied verbatim from the "Google Reviews" block on tis.edu.in.
export const testimonials = [
  { name: 'Namita Agarwal', role: 'Mother of Krishna Agarwal', text: 'Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.' },
  { name: 'Suresh Kumar', role: 'Father of Aditya Kumar', text: 'Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.' },
  { name: 'Ashu Arora', role: 'Mother of Manisha Changrani', text: 'It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.' },
]

export const footerLinks = [
  { label: 'FAQ', href: 'https://tis.edu.in/faq/' },
  { label: 'Brochure', href: school.brochureUrl },
  { label: 'Virtual Tour', href: school.virtualTourUrl },
  { label: 'Privacy Policy', href: 'https://tis.edu.in/privacy-policy/' },
  { label: 'Terms & Conditions', href: 'https://tis.edu.in/terms-conditions/' },
  { label: 'Child Welfare & Safety Policy', href: 'https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf' },
]

export const social = [
  { name: 'Facebook', icon: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/' },
  { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/tulas_intschool?lang=en' },
  { name: 'LinkedIn', icon: 'Linkedin', href: 'https://www.linkedin.com/school/tulas-international-school/' },
  { name: 'Instagram', icon: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/?hl=en' },
  { name: 'YouTube', icon: 'Youtube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
]
