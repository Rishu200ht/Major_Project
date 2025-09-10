// Company data with detailed information and real logos
const companies = [
  {
    id: 1,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    domain: ["web-development", "ai-ml", "data-science", "backend", "frontend", "full-stack"],
    description:
      "Google is a multinational technology company that specializes in Internet-related services and products, including online advertising technologies, a search engine, cloud computing, software, and hardware. Founded in 1998 by Larry Page and Sergey Brin while they were PhD students at Stanford University, Google has grown to become one of the world's most valuable companies. The company's mission is to organize the world's information and make it universally accessible and useful. Google's innovative culture encourages employees to spend 20% of their time on personal projects, leading to breakthrough products like Gmail, Google Maps, and Android.",
    hiringCount: 1200,
    avgPackage: "25-45 LPA",
    difficulty: "High",
    locations: ["Bangalore", "Hyderabad", "Mumbai", "Gurgaon"],
    founded: "1998",
    employees: "156,000+",
    revenue: "$282.8 billion",
    industry: "Technology, Internet Services, Cloud Computing",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    domain: ["web-development", "ai-ml", "cloud", "backend", "full-stack"],
    description:
      "Microsoft Corporation is an American multinational technology corporation that produces computer software, consumer electronics, personal computers, and related services. Founded by Bill Gates and Paul Allen in 1975, Microsoft is best known for its Windows operating systems, Microsoft Office suite, and Azure cloud computing platform. The company has successfully transformed from a traditional software company to a cloud-first, mobile-first organization under CEO Satya Nadella's leadership. Microsoft's culture emphasizes empowerment, inclusion, and growth mindset, making it an attractive workplace for fresh graduates looking to make a significant impact in the technology industry.",
    hiringCount: 800,
    avgPackage: "20-40 LPA",
    difficulty: "High",
    locations: ["Bangalore", "Hyderabad", "Noida"],
    founded: "1975",
    employees: "221,000+",
    revenue: "$211.9 billion",
    industry: "Software, Cloud Computing, AI",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    domain: ["web-development", "backend", "full-stack", "cloud", "data-science"],
    description:
      "Amazon.com Inc. is an American multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence. Founded by Jeff Bezos in 1994, Amazon started as an online marketplace for books but has since expanded to become one of the world's largest companies. Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. The company's leadership principles, including customer obsession, ownership, and bias for action, guide every decision and create a unique work culture that attracts top talent from around the world.",
    hiringCount: 1500,
    avgPackage: "18-35 LPA",
    difficulty: "High",
    locations: ["Bangalore", "Chennai", "Hyderabad", "Mumbai"],
    founded: "1994",
    employees: "1,541,000+",
    revenue: "$513.9 billion",
    industry: "E-commerce, Cloud Computing, Digital Streaming",
  },
  {
    id: 4,
    name: "Flipkart",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
    domain: ["web-development", "backend", "frontend", "full-stack", "data-analyst"],
    description:
      "Flipkart is India's leading e-commerce marketplace, founded in 2007 by Sachin Bansal and Binny Bansal. Starting as an online bookstore, Flipkart has evolved into a comprehensive e-commerce platform offering millions of products across various categories. The company revolutionized online shopping in India with innovations like cash-on-delivery, easy returns, and customer-centric policies. Flipkart's technology team works on cutting-edge solutions in areas like machine learning, artificial intelligence, supply chain optimization, and mobile technology. The company's culture emphasizes innovation, customer focus, and rapid execution, making it an exciting place for young engineers to build scalable solutions that impact millions of Indian consumers.",
    hiringCount: 600,
    avgPackage: "15-30 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Delhi", "Mumbai"],
    founded: "2007",
    employees: "50,000+",
    revenue: "$23 billion",
    industry: "E-commerce, Technology",
  },
  {
    id: 5,
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    domain: ["web-development", "ai-ml", "backend", "frontend", "full-stack"],
    description:
      "Meta Platforms Inc., formerly Facebook Inc., is an American multinational technology conglomerate based in Menlo Park, California. Founded by Mark Zuckerberg in 2004, Meta owns and operates Facebook, Instagram, WhatsApp, and Threads, connecting billions of people worldwide. The company is now focused on building the metaverse, a set of virtual spaces where people can create and explore with others who aren't in the same physical space. Meta's engineering culture emphasizes moving fast, being bold, and building social value. The company invests heavily in research and development, particularly in areas like virtual reality, augmented reality, and artificial intelligence, offering engineers opportunities to work on next-generation technologies that will shape the future of human connection.",
    hiringCount: 400,
    avgPackage: "30-55 LPA",
    difficulty: "High",
    locations: ["Bangalore", "Hyderabad", "Mumbai"],
    founded: "2004",
    employees: "77,805",
    revenue: "$134.9 billion",
    industry: "Social Media, Virtual Reality, AI",
  },
  {
    id: 6,
    name: "Paytm",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Paytm-Logo.png",
    domain: ["web-development", "mobile", "backend", "full-stack"],
    description:
      "Paytm is India's leading digital payments and financial services company, founded in 2010 by Vijay Shekhar Sharma. Starting as a mobile recharge platform, Paytm has evolved into a comprehensive fintech ecosystem offering digital payments, banking, insurance, lending, and investment services. The company played a crucial role in India's digital transformation, especially after demonetization in 2016. Paytm's technology stack handles millions of transactions daily, requiring robust, scalable, and secure systems. The engineering team works on cutting-edge technologies including blockchain, machine learning, and real-time analytics to build India's most trusted financial platform. The company culture emphasizes innovation, customer-centricity, and building solutions that democratize financial services for every Indian.",
    hiringCount: 400,
    avgPackage: "10-22 LPA",
    difficulty: "Medium",
    locations: ["Noida", "Bangalore", "Mumbai"],
    founded: "2010",
    employees: "26,000+",
    revenue: "$2.8 billion",
    industry: "Fintech, Digital Payments, Financial Services",
  },
  {
    id: 7,
    name: "Swiggy",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Swiggy-Logo.png",
    domain: ["web-development", "mobile", "backend", "data-science"],
    description:
      "Swiggy is India's leading on-demand delivery platform, founded in 2014 by Sriharsha Majety, Nandan Reddy, and Rahul Jaimini. The company revolutionized food delivery in India by building a comprehensive ecosystem that connects customers, restaurants, and delivery partners through technology. Swiggy has expanded beyond food delivery to include grocery delivery (Instamart), pick-up and drop services (Genie), and more. The engineering team at Swiggy works on complex problems involving real-time logistics optimization, demand forecasting, route optimization, and machine learning algorithms that power personalized recommendations. The company's culture emphasizes speed, customer obsession, and continuous innovation, making it an exciting place for engineers to solve real-world problems at scale while impacting millions of users across India.",
    hiringCount: 350,
    avgPackage: "12-28 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Hyderabad", "Mumbai"],
    founded: "2014",
    employees: "15,000+",
    revenue: "$1.2 billion",
    industry: "Food Delivery, Logistics, On-demand Services",
  },
  {
    id: 8,
    name: "Uber",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png",
    domain: ["web-development", "mobile", "backend", "data-science", "ai-ml"],
    description:
      "Uber Technologies Inc. is an American multinational ride-hailing company founded in 2009 by Garrett Camp and Travis Kalanick. The company has revolutionized urban mobility by connecting riders with drivers through its mobile app platform. Uber operates in over 70 countries and 10,000+ cities worldwide, facilitating millions of trips daily. Beyond ride-sharing, Uber has expanded into food delivery (Uber Eats), freight transportation (Uber Freight), and autonomous vehicle development. The engineering challenges at Uber are immense, involving real-time matching algorithms, dynamic pricing, route optimization, and handling massive scale with high availability requirements. Uber's engineering culture emphasizes data-driven decision making, experimentation, and building systems that can scale globally while maintaining local relevance in diverse markets.",
    hiringCount: 250,
    avgPackage: "15-32 LPA",
    difficulty: "High",
    locations: ["Bangalore", "Hyderabad"],
    founded: "2009",
    employees: "32,800+",
    revenue: "$37.3 billion",
    industry: "Transportation, Mobility, Logistics",
  },
  {
    id: 9,
    name: "Netflix",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
    domain: ["web-development", "backend", "data-science", "ai-ml"],
    description:
      "Netflix Inc. is an American subscription streaming service and production company founded in 1997 by Reed Hastings and Marc Randolph. Initially a DVD-by-mail service, Netflix transformed into the world's leading streaming entertainment service with over 230 million paid memberships in more than 190 countries. The company is renowned for its data-driven approach to content creation and personalized recommendations powered by sophisticated machine learning algorithms. Netflix's engineering team tackles unique challenges in video streaming, content delivery networks, microservices architecture, and A/B testing at massive scale. The company culture emphasizes freedom and responsibility, high performance, and continuous learning. Netflix engineers work on cutting-edge technologies including cloud computing, big data analytics, and artificial intelligence to deliver seamless streaming experiences to millions of users worldwide.",
    hiringCount: 150,
    avgPackage: "30-50 LPA",
    difficulty: "High",
    locations: ["Mumbai", "Bangalore"],
    founded: "1997",
    employees: "12,800+",
    revenue: "$31.6 billion",
    industry: "Streaming Entertainment, Media, Technology",
  },
  {
    id: 10,
    name: "Adobe",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Adobe-Logo.png",
    domain: ["web-development", "ai-ml", "frontend", "full-stack"],
    description:
      "Adobe Inc. is an American multinational computer software company founded in 1982 by John Warnock and Charles Geschke. Adobe is best known for its creative software products including Photoshop, Illustrator, Premiere Pro, and Acrobat PDF. The company has successfully transitioned from selling packaged software to a cloud-based subscription model with Adobe Creative Cloud. Adobe's engineering teams work on cutting-edge technologies in areas like digital imaging, video processing, artificial intelligence (Adobe Sensei), and cloud computing. The company's culture emphasizes creativity, innovation, and empowering people to create digital experiences. Adobe offers excellent opportunities for engineers to work on products used by millions of creative professionals worldwide, combining technical excellence with artistic innovation in a collaborative and inclusive environment.",
    hiringCount: 200,
    avgPackage: "20-38 LPA",
    difficulty: "High",
    locations: ["Bangalore", "Noida"],
    founded: "1982",
    employees: "26,000+",
    revenue: "$19.4 billion",
    industry: "Software, Digital Media, Creative Tools",
  },
  {
    id: 11,
    name: "Salesforce",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Salesforce-Logo.png",
    domain: ["web-development", "cloud", "backend", "full-stack"],
    description:
      "Salesforce Inc. is an American cloud-based software company founded in 1999 by Marc Benioff and Parker Harris. The company is the global leader in Customer Relationship Management (CRM) software, helping businesses connect with their customers in entirely new ways. Salesforce pioneered the Software-as-a-Service (SaaS) model and continues to innovate with its comprehensive platform that includes sales, service, marketing, analytics, and application development tools. The company's Trailhead learning platform has revolutionized technical education, making it accessible to millions worldwide. Salesforce's engineering culture emphasizes equality, innovation, and giving back to the community through its 1-1-1 model. Engineers at Salesforce work on massive-scale cloud infrastructure, AI-powered analytics (Einstein), and building platforms that enable businesses to transform digitally while maintaining the highest standards of security and reliability.",
    hiringCount: 300,
    avgPackage: "18-35 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Hyderabad", "Mumbai"],
    founded: "1999",
    employees: "79,000+",
    revenue: "$31.4 billion",
    industry: "Cloud Computing, CRM, Enterprise Software",
  },
  {
    id: 12,
    name: "Oracle",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
    domain: ["backend", "data-science", "cloud", "full-stack"],
    description:
      "Oracle Corporation is an American multinational computer technology corporation founded in 1977 by Larry Ellison, Bob Miner, and Ed Oates. Oracle is primarily known for its database software and technology, cloud engineered systems, and enterprise software products. The company's database management systems are used by organizations worldwide to store, organize, and retrieve data efficiently. Oracle has evolved into a comprehensive cloud computing company, offering Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS) solutions. The engineering teams at Oracle work on cutting-edge technologies including autonomous databases, machine learning, blockchain, and high-performance computing systems. Oracle's culture emphasizes technical excellence, innovation, and building enterprise-grade solutions that power critical business operations for Fortune 500 companies globally.",
    hiringCount: 400,
    avgPackage: "15-30 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Hyderabad", "Chennai"],
    founded: "1977",
    employees: "164,000+",
    revenue: "$50.0 billion",
    industry: "Database Software, Cloud Computing, Enterprise Software",
  },
  {
    id: 13,
    name: "IBM",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png",
    domain: ["ai-ml", "data-science", "cloud", "backend"],
    description:
      "International Business Machines Corporation (IBM) is an American multinational technology corporation founded in 1911, making it one of the oldest technology companies in the world. IBM has been at the forefront of technological innovation for over a century, from mainframe computers to artificial intelligence. Today, IBM focuses on hybrid cloud computing and artificial intelligence, with its flagship products including IBM Watson AI platform, Red Hat enterprise software, and IBM Cloud services. The company has a rich history of research and development, with IBM Research being one of the world's largest corporate research organizations. IBM's culture emphasizes continuous learning, diversity, and solving complex problems that matter to businesses and society. Engineers at IBM work on breakthrough technologies in quantum computing, AI, blockchain, and cloud infrastructure, contributing to innovations that shape the future of technology.",
    hiringCount: 500,
    avgPackage: "12-28 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Pune", "Chennai"],
    founded: "1911",
    employees: "282,000+",
    revenue: "$60.5 billion",
    industry: "Technology Consulting, Cloud Computing, AI",
  },
  {
    id: 14,
    name: "Accenture",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Logo.png",
    domain: ["web-development", "full-stack", "data-analyst", "cloud"],
    description:
      "Accenture plc is an Irish-American professional services company founded in 1989, with roots tracing back to Arthur Andersen's consulting division. Accenture is a global leader in consulting, technology services, and digital transformation, serving clients in more than 120 countries. The company helps organizations across industries reimagine their businesses through innovative technology solutions, from cloud migration and data analytics to artificial intelligence and cybersecurity. Accenture's diverse workforce of over 700,000 professionals brings deep industry expertise and cutting-edge technological capabilities to solve complex business challenges. The company's culture emphasizes continuous learning, inclusion, and delivering 360° value to clients, people, shareholders, partners, and communities. For fresh graduates, Accenture offers comprehensive training programs, mentorship opportunities, and exposure to diverse industries and technologies, making it an excellent launching pad for technology careers.",
    hiringCount: 2000,
    avgPackage: "8-18 LPA",
    difficulty: "Low",
    locations: ["Bangalore", "Mumbai", "Chennai", "Hyderabad", "Pune"],
    founded: "1989",
    employees: "738,000+",
    revenue: "$64.1 billion",
    industry: "Consulting, Technology Services, Digital Transformation",
  },
  {
    id: 15,
    name: "TCS",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/TCS-Logo.png",
    domain: ["web-development", "backend", "full-stack", "data-analyst"],
    description:
      "Tata Consultancy Services (TCS) is an Indian multinational information technology services and consulting company founded in 1968 as a division of the Tata Group. TCS is one of the largest IT services companies globally, serving clients across various industries including banking, insurance, retail, manufacturing, and telecommunications. The company has been a pioneer in India's IT revolution and continues to lead digital transformation initiatives worldwide. TCS operates in 46 countries and has over 600,000 employees, making it one of the world's largest employers in the technology sector. The company's research and innovation labs work on emerging technologies like artificial intelligence, machine learning, blockchain, and quantum computing. TCS's culture emphasizes continuous learning, employee development, and building long-term client relationships. For fresh graduates, TCS offers extensive training programs, global exposure, and opportunities to work on diverse projects across multiple domains and technologies.",
    hiringCount: 5000,
    avgPackage: "6-15 LPA",
    difficulty: "Low",
    locations: ["Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata"],
    founded: "1968",
    employees: "614,000+",
    revenue: "$27.9 billion",
    industry: "IT Services, Consulting, Digital Solutions",
  },
  {
    id: 16,
    name: "Infosys",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Infosys-Logo.png",
    domain: ["web-development", "backend", "full-stack", "ai-ml"],
    description:
      "Infosys Limited is an Indian multinational information technology company founded in 1981 by seven engineers including N. R. Narayana Murthy, Nandan Nilekani, and others. Infosys is a global leader in next-generation digital services and consulting, helping clients in more than 50 countries navigate their digital transformation journeys. The company is known for its strong corporate governance, employee-friendly policies, and commitment to sustainable business practices. Infosys has been at the forefront of India's IT boom and continues to innovate in areas like artificial intelligence, automation, cloud computing, and data analytics. The company's Mysore training facility is one of the world's largest corporate training centers, where thousands of fresh graduates are trained annually. Infosys's culture emphasizes learning, innovation, and social responsibility. The company offers excellent career growth opportunities, global exposure, and the chance to work with cutting-edge technologies while contributing to digital transformation initiatives for Fortune 500 companies worldwide.",
    hiringCount: 4000,
    avgPackage: "7-16 LPA",
    difficulty: "Low",
    locations: ["Bangalore", "Mysore", "Chennai", "Hyderabad", "Pune"],
    founded: "1981",
    employees: "343,000+",
    revenue: "$18.2 billion",
    industry: "IT Services, Digital Transformation, Consulting",
  },
  {
    id: 17,
    name: "Wipro",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Wipro-Logo.png",
    domain: ["web-development", "backend", "cloud", "data-science"],
    description:
      "Wipro Limited is an Indian multinational corporation founded in 1945 by Mohamed Premji as a vegetable oil company. Under the leadership of Azim Premji, Wipro transformed into one of India's leading information technology services companies. Today, Wipro is a global leader in information technology, consulting, and business process services, serving clients across six continents. The company specializes in digital transformation, cloud services, cybersecurity, and emerging technologies like artificial intelligence and machine learning. Wipro's research and development initiatives focus on creating innovative solutions that help businesses adapt to the digital age. The company's culture emphasizes integrity, respect for the individual, and commitment to sustainability. Wipro offers comprehensive training programs for fresh graduates, including technical skills development, soft skills training, and domain expertise. The company provides opportunities to work on diverse projects across multiple industries, enabling young professionals to build versatile skill sets and advance their careers in the global technology landscape.",
    hiringCount: 3000,
    avgPackage: "6-14 LPA",
    difficulty: "Low",
    locations: ["Bangalore", "Hyderabad", "Chennai", "Mumbai", "Pune"],
    founded: "1945",
    employees: "259,000+",
    revenue: "$10.4 billion",
    industry: "IT Services, Digital Solutions, Business Process Services",
  },
  {
    id: 18,
    name: "HCL Technologies",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/HCL-Logo.png",
    domain: ["web-development", "backend", "full-stack", "devops"],
    description:
      "HCL Technologies Limited is an Indian multinational information technology services and consulting company founded in 1976 by Shiv Nadar. HCL is one of India's leading technology companies and a prominent player in the global IT services market. The company provides a comprehensive range of services including application development, infrastructure management, engineering services, and digital transformation solutions. HCL has a strong presence in emerging technologies such as artificial intelligence, machine learning, Internet of Things (IoT), and blockchain. The company's Mode 1-2-3 strategy focuses on core IT services, digital transformation, and next-generation technologies respectively. HCL's culture emphasizes employee empowerment, innovation, and customer-centricity through its unique 'Employee First, Customer Second' philosophy. For fresh graduates, HCL offers extensive training programs, mentorship opportunities, and exposure to cutting-edge technologies. The company's global delivery model provides opportunities to work with international clients and gain valuable cross-cultural experience while building technical expertise in diverse domains.",
    hiringCount: 2500,
    avgPackage: "6-15 LPA",
    difficulty: "Low",
    locations: ["Noida", "Bangalore", "Chennai", "Hyderabad"],
    founded: "1976",
    employees: "219,000+",
    revenue: "$12.7 billion",
    industry: "IT Services, Engineering Services, Digital Solutions",
  },
  {
    id: 19,
    name: "Cognizant",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Cognizant-Logo.png",
    domain: ["web-development", "full-stack", "data-analyst", "ai-ml"],
    description:
      "Cognizant Technology Solutions Corporation is an American multinational information technology services and consulting company founded in 1994 as an in-house technology unit of Dun & Bradstreet. Cognizant has grown to become one of the world's leading professional services companies, helping organizations modernize technology, reimagine processes, and transform experiences. The company serves clients across various industries including healthcare, financial services, retail, manufacturing, and communications. Cognizant's expertise spans digital engineering, cloud computing, data analytics, artificial intelligence, and automation. The company has been at the forefront of digital transformation, helping businesses adapt to changing market dynamics and customer expectations. Cognizant's culture emphasizes diversity, inclusion, and continuous learning. The company offers comprehensive career development programs, including technical training, leadership development, and industry-specific expertise. For fresh graduates, Cognizant provides excellent opportunities to work on innovative projects, gain exposure to multiple technologies, and build careers in the rapidly evolving digital landscape.",
    hiringCount: 1800,
    avgPackage: "7-16 LPA",
    difficulty: "Low",
    locations: ["Chennai", "Bangalore", "Hyderabad", "Mumbai", "Pune"],
    founded: "1994",
    employees: "355,000+",
    revenue: "$19.4 billion",
    industry: "IT Services, Digital Transformation, Consulting",
  },
  {
    id: 20,
    name: "Capgemini",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Capgemini-Logo.png",
    domain: ["web-development", "cloud", "data-science", "full-stack"],
    description:
      "Capgemini SE is a French multinational information technology services and consulting company founded in 1967 by Serge Kampf. Capgemini is one of the world's foremost providers of consulting, technology services, and digital transformation solutions. The company helps organizations across industries unlock the value of technology to build a more sustainable and inclusive world. Capgemini's expertise spans strategy and transformation, applications and technology, data and artificial intelligence, cloud and infrastructure, and cybersecurity. The company has a strong focus on innovation and research, with dedicated labs and centers of excellence worldwide. Capgemini's culture emphasizes collaboration, diversity, and social responsibility. The company is committed to achieving net-zero emissions and promoting sustainable business practices. For fresh graduates, Capgemini offers comprehensive training programs, mentorship opportunities, and the chance to work on cutting-edge projects with global clients. The company's collaborative approach and focus on emerging technologies provide excellent opportunities for young professionals to develop technical skills and advance their careers in the digital economy.",
    hiringCount: 1200,
    avgPackage: "8-18 LPA",
    difficulty: "Medium",
    locations: ["Mumbai", "Bangalore", "Chennai", "Hyderabad"],
    founded: "1967",
    employees: "360,000+",
    revenue: "$22.0 billion",
    industry: "Consulting, Technology Services, Digital Transformation",
  },
]

const additionalCompanies = [
  {
    id: 21,
    name: "Tech Mahindra",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Tech-Mahindra-Logo.png",
    domain: ["web-development", "backend", "full-stack", "data-analyst"],
    description:
      "Tech Mahindra Limited is an Indian multinational information technology services and consulting company founded in 1986 as a joint venture between Mahindra Group and British Telecom. The company is a leading provider of digital transformation, consulting, and business re-engineering services and solutions. Tech Mahindra specializes in telecommunications, manufacturing, financial services, retail, healthcare, and government sectors. The company has a strong focus on emerging technologies including 5G, artificial intelligence, blockchain, cybersecurity, and Internet of Things. Tech Mahindra's engineering teams work on cutting-edge solutions for digital transformation, network services, and enterprise applications. The company operates in over 90 countries and serves Fortune 500 clients worldwide. Tech Mahindra's culture emphasizes innovation, sustainability, and employee development through comprehensive training programs and global exposure opportunities for fresh graduates.",
    hiringCount: 3500,
    avgPackage: "6-16 LPA",
    difficulty: "Low",
    locations: ["Pune", "Bangalore", "Chennai", "Hyderabad", "Mumbai"],
    founded: "1986",
    employees: "157,000+",
    revenue: "$6.5 billion",
    industry: "IT Services, Telecommunications, Digital Transformation",
  },
  {
    id: 22,
    name: "Mindtree",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Mindtree-Logo.png",
    domain: ["web-development", "cloud", "data-science", "full-stack"],
    description:
      "Mindtree Limited is an Indian multinational information technology and outsourcing company founded in 1999 by ten IT professionals including Krishnakumar Natarajan, Subroto Bagchi, and Rostow Ravanan. Now part of Larsen & Toubro Group, Mindtree is a global technology consulting and services company that helps enterprises reimagine their businesses for the digital age. The company specializes in digital transformation, cloud computing, data analytics, artificial intelligence, and enterprise application development. Mindtree serves clients across various industries including retail, manufacturing, technology, communications, and financial services. The company's engineering culture emphasizes continuous learning, innovation, and delivering high-quality solutions. Mindtree offers excellent career development opportunities for fresh graduates through comprehensive training programs, mentorship, and exposure to cutting-edge technologies and global projects.",
    hiringCount: 2000,
    avgPackage: "7-18 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Chennai", "Pune", "Hyderabad"],
    founded: "1999",
    employees: "35,000+",
    revenue: "$1.4 billion",
    industry: "IT Services, Digital Transformation, Cloud Computing",
  },
  {
    id: 23,
    name: "L&T Infotech",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/LTI-Logo.png",
    domain: ["web-development", "backend", "data-analyst", "devops"],
    description:
      "L&T Infotech (LTI) is an Indian multinational information technology services company founded in 1997 as a subsidiary of Larsen & Toubro. LTI is a global technology consulting and digital solutions company that helps clients across industries reimagine and transform their businesses through digital technologies. The company specializes in enterprise application development, data analytics, artificial intelligence, cloud migration, and digital transformation services. LTI serves clients in banking and financial services, insurance, healthcare, manufacturing, energy and utilities, and retail sectors. The company has a strong focus on emerging technologies and innovation, with dedicated centers of excellence for AI, machine learning, and automation. LTI's culture emphasizes technical excellence, continuous learning, and delivering value to clients through innovative solutions. The company offers comprehensive training programs and career development opportunities for fresh graduates.",
    hiringCount: 1500,
    avgPackage: "7-17 LPA",
    difficulty: "Medium",
    locations: ["Mumbai", "Bangalore", "Chennai", "Pune"],
    founded: "1997",
    employees: "50,000+",
    revenue: "$2.1 billion",
    industry: "IT Services, Digital Solutions, Technology Consulting",
  },
  {
    id: 24,
    name: "Mphasis",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Mphasis-Logo.png",
    domain: ["web-development", "cloud", "ai-ml", "data-science"],
    description:
      "Mphasis Limited is an Indian multinational information technology services company founded in 2000, with roots tracing back to 1998. The company is a leading IT solutions provider specializing in cloud and cognitive services, helping clients transform their businesses through digital technologies. Mphasis focuses on application development and maintenance, infrastructure services, business process outsourcing, and digital transformation solutions. The company serves clients across banking and financial services, insurance, logistics, energy and utilities, communications, and technology sectors. Mphasis has a strong emphasis on automation, artificial intelligence, and machine learning technologies. The company's Front2Back transformation approach helps clients reimagine their operations and customer experiences. Mphasis culture emphasizes innovation, agility, and continuous learning, providing excellent opportunities for fresh graduates to work on cutting-edge technologies and global projects.",
    hiringCount: 1200,
    avgPackage: "6-15 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Chennai", "Pune", "Hyderabad"],
    founded: "2000",
    employees: "30,000+",
    revenue: "$1.3 billion",
    industry: "IT Services, Cloud Computing, Digital Transformation",
  },
  {
    id: 25,
    name: "HDFC Bank",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/HDFC-Bank-Logo.png",
    domain: ["web-development", "data-analyst", "fintech", "backend"],
    description:
      "HDFC Bank Limited is India's largest private sector bank founded in 1994, headquartered in Mumbai. The bank has been at the forefront of digital banking innovation in India, consistently investing in technology to enhance customer experience and operational efficiency. HDFC Bank's technology division works on developing cutting-edge banking solutions including mobile banking apps, internet banking platforms, payment gateways, and digital lending systems. The bank has a strong focus on data analytics, artificial intelligence, and machine learning for risk management, fraud detection, and personalized customer services. HDFC Bank's IT teams work on complex challenges involving real-time transaction processing, regulatory compliance, cybersecurity, and building scalable financial platforms. The bank offers excellent career opportunities for technology professionals, especially in areas like fintech development, data science, and digital banking solutions. The culture emphasizes innovation, customer-centricity, and leveraging technology to democratize banking services.",
    hiringCount: 800,
    avgPackage: "8-20 LPA",
    difficulty: "Medium",
    locations: ["Mumbai", "Bangalore", "Chennai", "Pune", "Delhi"],
    founded: "1994",
    employees: "120,000+",
    revenue: "$15.0 billion",
    industry: "Banking, Financial Services, Fintech",
  },
  {
    id: 26,
    name: "ICICI Bank",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/ICICI-Bank-Logo.png",
    domain: ["web-development", "data-analyst", "ai-ml", "fintech"],
    description:
      "ICICI Bank Limited is India's second-largest private sector bank founded in 1994, known for its technology-driven approach to banking. The bank has been a pioneer in digital banking, introducing innovative services like internet banking, mobile banking, and digital payment solutions. ICICI Bank's technology teams work on developing sophisticated banking platforms, data analytics systems, artificial intelligence applications, and cybersecurity solutions. The bank has made significant investments in emerging technologies including blockchain, machine learning, and robotic process automation to enhance operational efficiency and customer experience. ICICI Bank's IT division handles complex challenges involving high-frequency transaction processing, risk management systems, regulatory compliance, and building secure financial platforms. The bank offers excellent opportunities for technology professionals to work on cutting-edge fintech solutions, data science projects, and digital transformation initiatives. The culture emphasizes innovation, agility, and leveraging technology to provide superior banking services to millions of customers.",
    hiringCount: 600,
    avgPackage: "8-18 LPA",
    difficulty: "Medium",
    locations: ["Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune"],
    founded: "1994",
    employees: "100,000+",
    revenue: "$12.5 billion",
    industry: "Banking, Financial Services, Digital Banking",
  },
  {
    id: 27,
    name: "Axis Bank",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Axis-Bank-Logo.png",
    domain: ["web-development", "backend", "data-analyst", "fintech"],
    description:
      "Axis Bank Limited is India's third-largest private sector bank founded in 1993, headquartered in Mumbai. The bank has established itself as a technology-forward financial institution, consistently investing in digital transformation and innovative banking solutions. Axis Bank's technology division focuses on developing advanced banking platforms, mobile applications, payment systems, and data analytics solutions. The bank has been at the forefront of adopting emerging technologies including artificial intelligence, machine learning, and blockchain for various banking operations. Axis Bank's IT teams work on complex projects involving core banking systems, digital lending platforms, wealth management solutions, and cybersecurity frameworks. The bank has a strong focus on data-driven decision making and uses advanced analytics for risk assessment, customer segmentation, and personalized product offerings. Axis Bank offers excellent career opportunities for technology professionals, particularly in areas like fintech development, data science, and digital banking innovation.",
    hiringCount: 500,
    avgPackage: "7-17 LPA",
    difficulty: "Medium",
    locations: ["Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune"],
    founded: "1993",
    employees: "80,000+",
    revenue: "$10.2 billion",
    industry: "Banking, Financial Services, Digital Banking",
  },
  {
    id: 28,
    name: "Deloitte",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Deloitte-Logo.png",
    domain: ["web-development", "data-analyst", "ai-ml", "cloud"],
    description:
      "Deloitte is one of the world's largest professional services networks founded in 1845, providing audit, consulting, tax, and advisory services to clients across various industries. Deloitte's technology consulting division helps organizations navigate digital transformation, implement emerging technologies, and optimize their IT infrastructure. The company has significant expertise in areas including cloud computing, artificial intelligence, data analytics, cybersecurity, and enterprise software implementation. Deloitte's technology teams work on complex projects involving system integration, digital strategy, process automation, and building custom software solutions for Fortune 500 clients. The company has a strong focus on innovation and research, with dedicated labs and centers of excellence for emerging technologies. Deloitte offers excellent career opportunities for technology professionals, providing exposure to diverse industries, cutting-edge technologies, and global projects. The culture emphasizes continuous learning, professional development, and delivering high-quality solutions that drive business value for clients.",
    hiringCount: 1000,
    avgPackage: "10-25 LPA",
    difficulty: "Medium",
    locations: ["Mumbai", "Bangalore", "Chennai", "Hyderabad", "Delhi"],
    founded: "1845",
    employees: "415,000+",
    revenue: "$59.3 billion",
    industry: "Professional Services, Technology Consulting, Digital Transformation",
  },
  {
    id: 29,
    name: "EY (Ernst & Young)",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/EY-Logo.png",
    domain: ["web-development", "data-analyst", "ai-ml", "backend"],
    description:
      "Ernst & Young (EY) is one of the world's largest professional services firms founded in 1989 through a merger, with roots dating back to 1849. EY provides assurance, tax, transaction, and advisory services to clients worldwide. The company's technology consulting division helps organizations implement digital transformation strategies, adopt emerging technologies, and optimize their business processes. EY has significant expertise in areas including artificial intelligence, blockchain, cybersecurity, data analytics, and cloud computing. The company's technology teams work on complex projects involving enterprise software implementation, system integration, process automation, and building innovative solutions for clients across various industries. EY has a strong focus on innovation and has established multiple technology centers and labs worldwide. The company offers excellent career opportunities for technology professionals, providing exposure to cutting-edge technologies, diverse industries, and global projects. EY's culture emphasizes professional excellence, continuous learning, and delivering transformative solutions that help clients build a better working world.",
    hiringCount: 800,
    avgPackage: "9-22 LPA",
    difficulty: "Medium",
    locations: ["Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune"],
    founded: "1989",
    employees: "365,000+",
    revenue: "$45.4 billion",
    industry: "Professional Services, Technology Consulting, Business Advisory",
  },
  {
    id: 30,
    name: "PwC (PricewaterhouseCoopers)",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/PwC-Logo.png",
    domain: ["web-development", "data-analyst", "ai-ml", "cloud"],
    description:
      "PricewaterhouseCoopers (PwC) is one of the world's largest professional services networks founded in 1998 through a merger, with origins dating back to 1849. PwC provides audit, tax, and consulting services to organizations across various industries. The company's technology consulting practice helps clients navigate digital transformation, implement emerging technologies, and optimize their operations through technology solutions. PwC has deep expertise in areas including artificial intelligence, machine learning, blockchain, cybersecurity, data analytics, and cloud computing. The company's technology teams work on complex engagements involving digital strategy, system implementation, process automation, and building custom technology solutions for Fortune 500 clients. PwC has established multiple innovation labs and technology centers worldwide to drive research and development in emerging technologies. The company offers excellent career opportunities for technology professionals, providing exposure to diverse industries, cutting-edge technologies, and global projects. PwC's culture emphasizes quality, integrity, and leveraging technology to solve complex business challenges.",
    hiringCount: 700,
    avgPackage: "9-23 LPA",
    difficulty: "Medium",
    locations: ["Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata"],
    founded: "1998",
    employees: "328,000+",
    revenue: "$50.3 billion",
    industry: "Professional Services, Technology Consulting, Business Advisory",
  },
]

const moreCompanies = [
  {
    id: 31,
    name: "Razorpay",
    logo: "https://razorpay.com/assets/razorpay-logo.svg",
    domain: ["web-development", "backend", "full-stack", "fintech"],
    description:
      "Razorpay is India's leading fintech company founded in 2014 by Harshil Mathur and Shashank Kumar. The company provides a comprehensive suite of payment solutions that enable businesses to accept, process, and disburse payments online. Razorpay has revolutionized digital payments in India by offering simple, fast, and secure payment solutions for businesses of all sizes, from startups to large enterprises. The platform supports over 100 payment methods including credit cards, debit cards, net banking, UPI, and digital wallets. Razorpay's technology stack handles millions of transactions daily, requiring robust security measures, real-time processing capabilities, and seamless integration APIs. The engineering team works on cutting-edge technologies including machine learning for fraud detection, blockchain for secure transactions, and advanced analytics for business insights. The company culture emphasizes innovation, customer obsession, and building products that democratize financial services for Indian businesses.",
    hiringCount: 400,
    avgPackage: "15-35 LPA",
    difficulty: "Medium",
    locations: ["Bangalore"],
    founded: "2014",
    employees: "3,500+",
    revenue: "$500 million",
    industry: "Fintech, Digital Payments, Financial Services",
  },
  {
    id: 32,
    name: "Paytm",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Paytm-Logo.png",
    domain: ["web-development", "mobile", "backend", "fintech"],
    description:
      "Paytm is India's leading digital payments and financial services company, founded in 2010 by Vijay Shekhar Sharma. Starting as a mobile recharge platform, Paytm has evolved into a comprehensive fintech ecosystem offering digital payments, banking, insurance, lending, and investment services. The company played a crucial role in India's digital transformation, especially after demonetization in 2016. Paytm's technology stack handles millions of transactions daily, requiring robust, scalable, and secure systems. The engineering team works on cutting-edge technologies including blockchain, machine learning, and real-time analytics to build India's most trusted financial platform. The company culture emphasizes innovation, customer-centricity, and building solutions that democratize financial services for every Indian. Paytm offers excellent opportunities for fresh graduates to work on large-scale fintech solutions, payment processing systems, and financial technology innovations.",
    hiringCount: 600,
    avgPackage: "12-28 LPA",
    difficulty: "Medium",
    locations: ["Noida", "Bangalore", "Mumbai"],
    founded: "2010",
    employees: "26,000+",
    revenue: "$2.8 billion",
    industry: "Fintech, Digital Payments, Financial Services",
  },
  {
    id: 33,
    name: "Swiggy",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Swiggy-Logo.png",
    domain: ["web-development", "mobile", "backend", "data-science"],
    description:
      "Swiggy is India's leading on-demand delivery platform, founded in 2014 by Sriharsha Majety, Nandan Reddy, and Rahul Jaimini. The company revolutionized food delivery in India by building a comprehensive ecosystem that connects customers, restaurants, and delivery partners through technology. Swiggy has expanded beyond food delivery to include grocery delivery (Instamart), pick-up and drop services (Genie), and more. The engineering team at Swiggy works on complex problems involving real-time logistics optimization, demand forecasting, route optimization, and machine learning algorithms that power personalized recommendations. The company's culture emphasizes speed, customer obsession, and continuous innovation, making it an exciting place for engineers to solve real-world problems at scale while impacting millions of users across India. Swiggy offers excellent opportunities for fresh graduates to work on cutting-edge logistics technology, mobile applications, and data science projects.",
    hiringCount: 500,
    avgPackage: "15-32 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Hyderabad", "Mumbai"],
    founded: "2014",
    employees: "15,000+",
    revenue: "$1.2 billion",
    industry: "Food Delivery, Logistics, On-demand Services",
  },
  {
    id: 34,
    name: "Zomato",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Zomato-Logo.png",
    domain: ["web-development", "mobile", "backend", "data-science"],
    description:
      "Zomato is India's leading food delivery and restaurant discovery platform founded in 2008 by Deepinder Goyal and Pankaj Chaddah. Starting as a restaurant review website, Zomato has evolved into a comprehensive food ecosystem offering food delivery, dining out, and restaurant management solutions. The company operates in over 24 countries and serves millions of customers daily. Zomato's technology platform handles complex logistics optimization, real-time order tracking, dynamic pricing, and personalized food recommendations. The engineering team works on cutting-edge technologies including machine learning for demand forecasting, computer vision for food recognition, and advanced analytics for restaurant insights. Zomato went public in 2021 and continues to innovate in areas like cloud kitchens, subscription services, and hyperlocal delivery. The company culture emphasizes customer obsession, innovation, and building technology solutions that connect people with great food experiences.",
    hiringCount: 450,
    avgPackage: "14-30 LPA",
    difficulty: "Medium",
    locations: ["Gurgaon", "Bangalore", "Mumbai"],
    founded: "2008",
    employees: "5,000+",
    revenue: "$1.8 billion",
    industry: "Food Delivery, Restaurant Technology, Logistics",
  },
  {
    id: 35,
    name: "PhonePe",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/PhonePe-Logo.png",
    domain: ["web-development", "mobile", "backend", "fintech"],
    description:
      "PhonePe is India's leading digital payments platform founded in 2015 by Sameer Nigam, Rahul Chari, and Burzin Engineer. The company was acquired by Flipkart in 2016 and has since become one of India's most popular UPI-based payment apps. PhonePe enables users to send and receive money, recharge mobile phones, pay utility bills, book travel tickets, and access various financial services through a simple mobile interface. The platform processes billions of transactions annually and has played a crucial role in India's digital payments revolution. PhonePe's technology infrastructure is built to handle massive transaction volumes with millisecond response times while maintaining the highest security standards. The engineering team works on complex challenges involving real-time payment processing, fraud detection, regulatory compliance, and building scalable microservices architecture. The company culture emphasizes customer obsession, innovation, and building products that simplify financial transactions for millions of Indians.",
    hiringCount: 350,
    avgPackage: "18-38 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Pune"],
    founded: "2015",
    employees: "5,000+",
    revenue: "$1.5 billion",
    industry: "Fintech, Digital Payments, Financial Services",
  },
  {
    id: 36,
    name: "Myntra",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Myntra-Logo.png",
    domain: ["web-development", "mobile", "data-analyst", "ai-ml"],
    description:
      "Myntra is India's leading fashion e-commerce platform founded in 2007 by Mukesh Bansal, Ashutosh Lawania, and Vineet Saxena. Originally started as a platform for personalized gift items, Myntra pivoted to fashion e-commerce and has become the go-to destination for fashion-conscious consumers in India. The platform offers a wide range of clothing, footwear, accessories, and lifestyle products from both international and domestic brands. Myntra was acquired by Flipkart in 2014 and continues to operate as an independent brand. The company has revolutionized fashion retail in India through innovations like virtual try-on, style recommendations, and trend forecasting. Myntra's technology team works on complex problems involving computer vision for fashion search, recommendation algorithms, supply chain optimization, and mobile app performance. The engineering challenges include handling seasonal traffic spikes, managing vast product catalogs, and creating personalized shopping experiences.",
    hiringCount: 300,
    avgPackage: "15-28 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Mumbai"],
    founded: "2007",
    employees: "4,000+",
    revenue: "$2.0 billion",
    industry: "Fashion E-commerce, Retail Technology, Lifestyle",
  },
  {
    id: 37,
    name: "Ola",
    logo: "https://logos-world.net/wp-content/uploads/2020/05/Ola-Logo.png",
    domain: ["web-development", "mobile", "backend", "data-science"],
    description:
      "Ola is India's leading mobility platform founded in 2010 by Bhavish Aggarwal and Ankit Bhati. The company started as a cab aggregator and has evolved into a comprehensive mobility ecosystem offering ride-hailing, food delivery, financial services, and electric vehicle solutions. Ola operates in over 250 cities across India, Australia, New Zealand, and the UK, facilitating millions of rides daily. The company has been at the forefront of India's transportation revolution, introducing innovative services like Ola Share, Ola Auto, and Ola Bike. Ola's engineering challenges involve real-time matching algorithms, dynamic pricing models, route optimization, and handling massive scale with high availability requirements. The company is also pioneering electric mobility in India through Ola Electric, manufacturing electric scooters and building charging infrastructure. Ola's culture emphasizes innovation, sustainability, and building solutions that improve urban mobility while creating economic opportunities for millions of driver-partners.",
    hiringCount: 400,
    avgPackage: "14-30 LPA",
    difficulty: "Medium",
    locations: ["Bangalore", "Hyderabad"],
    founded: "2010",
    employees: "10,000+",
    revenue: "$2.0 billion",
    industry: "Transportation, Mobility, Electric Vehicles",
  },
  {
    id: 38,
    name: "Freshworks",
    logo: "https://logos-world.net/wp-content/uploads/2021/09/Freshworks-Logo.png",
    domain: ["web-development", "backend", "full-stack", "ai-ml"],
    description:
      "Freshworks Inc. is an Indian-American software-as-a-service company founded in 2010 by Girish Mathrubootham and Shan Krishnasamy in Chennai, India. The company provides cloud-based customer experience software including customer support, sales CRM, marketing automation, and IT service management solutions. Freshworks has grown from a startup in Chennai to a publicly-traded company on NASDAQ, serving over 60,000 customers worldwide. The company's products are designed to be intuitive, affordable, and quick to implement, making enterprise-grade software accessible to businesses of all sizes. Freshworks' engineering team works on building scalable SaaS platforms, developing AI-powered automation features, and creating seamless integrations with third-party applications. The company has been a pioneer in the Indian SaaS ecosystem and continues to innovate in areas like conversational AI, predictive analytics, and workflow automation. Freshworks culture emphasizes customer obsession, innovation, and building products that delight users while solving real business problems.",
    hiringCount: 400,
    avgPackage: "18-35 LPA",
    difficulty: "Medium",
    locations: ["Chennai", "Bangalore"],
    founded: "2010",
    employees: "5,000+",
    revenue: "$596 million",
    industry: "Software-as-a-Service, Customer Experience, Business Software",
  },
  {
    id: 39,
    name: "Zoho",
    logo: "https://logos-world.net/wp-content/uploads/2020/12/Zoho-Logo.png",
    domain: ["web-development", "backend", "full-stack", "cloud"],
    description:
      "Zoho Corporation is an Indian multinational technology company founded in 1996 by Sridhar Vembu and Tony Thomas. Zoho offers a comprehensive suite of cloud-based business applications including CRM, email, office productivity tools, project management, and financial software. The company serves over 80 million users worldwide and has built one of the world's most comprehensive business software ecosystems. Zoho is known for its bootstrapped growth model, having built a billion-dollar business without external funding. The company has a unique culture that emphasizes rural development, with several offices located in small towns and villages across India. Zoho's engineering philosophy focuses on building products in-house, maintaining complete control over the technology stack, and creating integrated solutions that work seamlessly together. The engineering team works on diverse challenges spanning web applications, mobile development, database systems, and enterprise software architecture. Zoho's culture promotes long-term thinking, employee ownership, and building sustainable technology solutions.",
    hiringCount: 600,
    avgPackage: "10-25 LPA",
    difficulty: "Medium",
    locations: ["Chennai", "Bangalore"],
    founded: "1996",
    employees: "15,000+",
    revenue: "$1.0 billion",
    industry: "Business Software, Cloud Computing, SaaS",
  },
  {
    id: 40,
    name: "Postman",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/Postman-Logo.png",
    domain: ["web-development", "backend", "devops", "api"],
    description:
      "Postman Inc. is an American-Indian API platform company founded in 2014 by Abhinav Asthana, Ankit Sobti, and Abhijit Kane. The company started as a simple Chrome extension for testing APIs and has evolved into the world's leading API development platform used by over 25 million developers and 500,000 organizations worldwide. Postman provides a comprehensive set of tools for API development, testing, documentation, monitoring, and collaboration. The platform has become essential infrastructure for modern software development, enabling teams to build, test, and manage APIs more efficiently. Postman's engineering team works on complex challenges involving distributed systems, real-time collaboration, API analytics, and building developer-friendly tools at scale. The company has played a crucial role in the API-first development movement and continues to innovate in areas like API governance, security testing, and workflow automation. Postman's culture emphasizes developer advocacy, community building, and creating tools that improve the API development experience.",
    hiringCount: 150,
    avgPackage: "25-45 LPA",
    difficulty: "High",
    locations: ["Bangalore"],
    founded: "2014",
    employees: "800+",
    revenue: "$200 million",
    industry: "Developer Tools, API Platform, Software Development",
  },
]

const allCompanies = [...companies, ...additionalCompanies, ...moreCompanies]

function showLoading() {
  const loadingHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
      <div class="loading-text">Loading companies...</div>
      <div class="loading-bar">
        <div class="loading-progress"></div>
      </div>
    </div>
  `
  document.querySelector(".companies-grid").innerHTML = loadingHTML

  // Animate loading bar
  setTimeout(() => {
    const progress = document.querySelector(".loading-progress")
    if (progress) {
      progress.style.width = "100%"
    }
  }, 100)
}

function hideLoading() {
  setTimeout(() => {
    renderCompanies(allCompanies)
  }, 1500) // Show loading for 1.5 seconds
}

// Global variables
const filteredCompanies = [...allCompanies]

// DOM Elements
const companiesGrid = document.getElementById("companiesGrid")
const domainFilter = document.getElementById("domainFilter")
const searchInput = document.getElementById("searchInput")

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderCompanies(allCompanies)
  drawHiringChart()
  setupEventListeners()
})

// Setup event listeners
function setupEventListeners() {
  // Smooth scrolling for navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)
    })
  })

  // Search input real-time filtering
  searchInput.addEventListener("input", applyFilters)
  domainFilter.addEventListener("change", applyFilters)
}

// Render companies in the grid
function renderCompanies(companiesToRender) {
  const companiesGrid = document.querySelector(".companies-grid")

  if (companiesToRender.length === 0) {
    companiesGrid.innerHTML = '<div class="no-results">No companies found matching your criteria.</div>'
    return
  }

  companiesGrid.innerHTML = companiesToRender
    .map(
      (company) => `
    <div class="company-card" onclick="openCompanyDetails(${company.id})">
      <div class="company-logo">
        <img src="${company.logo}" alt="${company.name} Logo" onerror="this.style.display='none'; this.parentElement.innerHTML='${company.name.charAt(0)}';">
      </div>
      <h3 class="company-name">${company.name}</h3>
      <div class="company-domain">${company.domain.slice(0, 2).join(", ")}${company.domain.length > 2 ? "..." : ""}</div>
      <p class="company-description">${company.description.substring(0, 120)}...</p>
      <div class="company-stats">
        <div class="stat">
          <div class="stat-number">${company.hiringCount}</div>
          <div class="stat-label">Hiring</div>
        </div>
        <div class="stat">
          <div class="stat-number">${company.avgPackage}</div>
          <div class="stat-label">Package</div>
        </div>
        <div class="stat">
          <div class="stat-number">${company.difficulty}</div>
          <div class="stat-label">Level</div>
        </div>
      </div>
      <button class="view-details">View Details</button>
    </div>
  `,
    )
    .join("")
}

// Create individual company card
function createCompanyCard(company) {
  const card = document.createElement("div")
  card.className = "company-card"
  card.innerHTML = `
        <div class="company-logo"><img src="${company.logo}" alt="${company.name} Logo" onerror="this.style.display='none'"></div>
        <h3 class="company-name">${company.name}</h3>
        <div class="company-domain">${company.domain[0].replace("-", " ").toUpperCase()}</div>
        <p class="company-description">${company.description}</p>
        <div class="company-stats">
            <div class="stat">
                <div class="stat-number">${company.hiringCount}</div>
                <div class="stat-label">Hiring</div>
            </div>
            <div class="stat">
                <div class="stat-number">${company.avgPackage}</div>
                <div class="stat-label">Package</div>
            </div>
            <div class="stat">
                <div class="stat-number">${company.difficulty}</div>
                <div class="stat-label">Level</div>
            </div>
        </div>
        <button class="view-details" onclick="openCompanyDetails(${company.id})">View Details</button>
    `

  return card
}

// Apply filters
function applyFilters() {
  showLoading()

  setTimeout(() => {
    const domainFilter = document.getElementById("domainFilter").value
    const searchTerm = document.getElementById("searchInput").value.toLowerCase()

    let filteredCompanies = allCompanies

    if (domainFilter !== "all") {
      filteredCompanies = filteredCompanies.filter((company) => company.domain.includes(domainFilter))
    }

    if (searchTerm) {
      filteredCompanies = filteredCompanies.filter(
        (company) =>
          company.name.toLowerCase().includes(searchTerm) ||
          company.description.toLowerCase().includes(searchTerm) ||
          company.domain.some((d) => d.toLowerCase().includes(searchTerm)),
      )
    }

    renderCompanies(filteredCompanies)
  }, 800)
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

function openCompanyDetails(companyId) {
  const company = allCompanies.find((c) => c.id === companyId)
  if (!company) return

  // Hide main content and show detail page
  document.querySelector(".hero").style.display = "none"
  document.querySelector(".filter-section").style.display = "none"
  document.querySelector(".companies-section").style.display = "none"
  document.querySelector(".trends-section").style.display = "none"
  document.querySelector(".footer").style.display = "none"

  // Create detail page
  const detailPage = document.createElement("div")
  detailPage.className = "company-detail"
  detailPage.innerHTML = createCompanyDetailPage(company)

  document.body.appendChild(detailPage)
  window.scrollTo(0, 0)
}

function closeCompanyDetails() {
  // Remove detail page
  const detailPage = document.querySelector(".company-detail")
  if (detailPage) {
    detailPage.remove()
  }

  // Show main content
  document.querySelector(".hero").style.display = "block"
  document.querySelector(".filter-section").style.display = "block"
  document.querySelector(".companies-section").style.display = "block"
  document.querySelector(".trends-section").style.display = "block"
  document.querySelector(".footer").style.display = "block"

  window.scrollTo(0, 0)
}

function createCompanyDetailPage(company) {
  // Determine round structure based on company type
  let roundsStructure = ""

  if (["google", "microsoft", "amazon", "meta", "apple"].includes(company.name.toLowerCase())) {
    // Tech giants - focus on technical depth
    roundsStructure = `
                <div class="rounds-timeline">
                    <div class="round-item">
                        <div class="round-title">Round 1: Online Assessment Test (OAT)</div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-top: 20px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 10px;">📋 Test Structure</h5>
                                <ul>
                                    <li><strong>Duration:</strong> 90-120 minutes</li>
                                    <li><strong>Total Questions:</strong> 60-80</li>
                                    <li><strong>Sections:</strong> 4 main sections</li>
                                    <li><strong>Negative Marking:</strong> -0.25 for wrong answers</li>
                                    <li><strong>Cutoff:</strong> Typically 70-80% for ${company.name}</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 10px;">🧮 Section Breakdown</h5>
                                <ul>
                                    <li><strong>Quantitative Aptitude:</strong> 15-20 questions</li>
                                    <li><strong>Logical Reasoning:</strong> 15-20 questions</li>
                                    <li><strong>Technical MCQs:</strong> 25-30 questions</li>
                                    <li><strong>Coding Problems:</strong> 3-4 questions (Hard level)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 12px; margin-top: 20px;">
                            <h5 style="color: #FFA500; margin-bottom: 15px;">💻 ${company.name} Specific Coding Challenges</h5>
                            <p style="margin-bottom: 15px;">
                                ${company.name} is known for challenging algorithmic problems that test your problem-solving depth. 
                                The coding section typically includes complex data structure problems, dynamic programming challenges, 
 section typically includes complex data structure problems, dynamic programming challenges,
                                and system design thinking questions. You'll need to demonstrate not just coding ability but also
                                optimization skills and clean code practices.
                            </p>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Hard Problem (2-3)</strong><br>
                                    Graph algorithms, DP, Trees
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>System Design (1)</strong><br>
                                    Scalability, Architecture
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Time Limit</strong><br>
                                    45-60 minutes per problem
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 2: Technical Phone/Video Interview</div>
                        <div style="background: #fff3cd; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>👨‍💻 Interviewer Profile:</strong> Senior Software Engineer or Staff Engineer with 8+ years at ${company.name}
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">⏱️ Interview Structure (60-75 minutes)</h5>
                                <ul style="line-height: 1.8;">
                                    <li><strong>Introduction (5 minutes):</strong> Brief self-intro, resume highlights</li>
                                    <li><strong>Technical Deep Dive (20 minutes):</strong> Past projects, architecture decisions</li>
                                    <li><strong>Live Coding (35 minutes):</strong> 2 medium-hard problems</li>
                                    <li><strong>System Design (10 minutes):</strong> High-level architecture discussion</li>
                                    <li><strong>Q&A (5 minutes):</strong> Your questions about team/role</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🎯 ${company.name} Focus Areas</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Advanced Data Structures (Tries, Segment Trees)</li>
                                    <li>Complex Algorithms (Graph, Dynamic Programming)</li>
                                    <li>System Design Fundamentals</li>
                                    <li>Code Optimization and Time Complexity</li>
                                    <li>Problem-solving methodology and communication</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 3: Technical Onsite/Virtual Onsite</div>
                        <div style="background: #d4edda; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>👨‍💼 Interviewer Profile:</strong> Senior Staff Engineer, Principal Engineer, or Engineering Manager
                        </div>
                        
                        <p style="line-height: 1.8; margin-bottom: 20px;">
                            This is the most challenging technical round where ${company.name} evaluates your ability to solve complex,
                            real-world problems. The interview simulates actual work scenarios and tests your system thinking,
                            scalability considerations, and ability to handle ambiguous requirements.
                        </p>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🏗️ System Design Deep Dive</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Design a distributed system (e.g., Chat application, URL shortener)</li>
                                    <li>Database design, sharding, and replication strategies</li>
                                    <li>API design, rate limiting, and caching layers</li>
                                    <li>Microservices architecture and communication patterns</li>
                                    <li>Performance optimization and monitoring strategies</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🔧 Advanced Problem Solving</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Multi-step algorithmic challenges</li>
                                    <li>Optimization problems with constraints</li>
                                    <li>Concurrent programming scenarios</li>
                                    <li>Memory-efficient solutions</li>
                                    <li>Trade-off analysis and decision making</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 4: Behavioral & Leadership Interview</div>
                        <div style="background: #f8d7da; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>👩‍💼 Interviewer Profile:</strong> Engineering Manager, Director, or VP of Engineering
                        </div>
                        
                        <p style="line-height: 1.8; margin-bottom: 20px;">
                            ${company.name} places high emphasis on cultural fit and leadership potential. This round evaluates your
                            alignment with company values, your ability to work in diverse teams, and your potential for growth
                            into leadership roles.
                        </p>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🎭 ${company.name} Leadership Principles</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Tell me about a time you took ownership of a difficult problem</li>
                                    <li>Describe a situation where you had to influence without authority</li>
                                    <li>How do you handle disagreements with team members?</li>
                                    <li>Give an example of when you had to learn something completely new</li>
                                    <li>What's the most innovative solution you've implemented?</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🌟 Growth & Vision Questions</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Where do you see yourself in 5 years?</li>
                                    <li>What excites you most about working at ${company.name}?</li>
                                    <li>How do you stay updated with technology trends?</li>
                                    <li>Describe your ideal work environment</li>
                                    <li>What questions do you have about our team/culture?</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`
  } else if (["tcs", "infosys", "wipro", "hcl", "cognizant"].includes(company.name.toLowerCase())) {
    // Service companies - include GD and communication rounds
    roundsStructure = `
                <div class="rounds-timeline">
                    <div class="round-item">
                        <div class="round-title">Round 1: Online Assessment Test</div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-top: 20px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 10px;">📋 Test Structure</h5>
                                <ul>
                                    <li><strong>Duration:</strong> 120-150 minutes</li>
                                    <li><strong>Total Questions:</strong> 80-100</li>
                                    <li><strong>Sections:</strong> 5 main sections</li>
                                    <li><strong>Negative Marking:</strong> -0.25 for wrong answers</li>
                                    <li><strong>Cutoff:</strong> Typically 55-65% for ${company.name}</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 10px;">🧮 Section Breakdown</h5>
                                <ul>
                                    <li><strong>Quantitative Aptitude:</strong> 20-25 questions</li>
                                    <li><strong>Logical Reasoning:</strong> 20-25 questions</li>
                                    <li><strong>Verbal Ability:</strong> 15-20 questions</li>
                                    <li><strong>Technical MCQs:</strong> 15-20 questions</li>
                                    <li><strong>Coding Problems:</strong> 2-3 questions (Easy-Medium)</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 12px; margin-top: 20px;">
                            <h5 style="color: #FFA500; margin-bottom: 15px;">📚 ${company.name} Assessment Focus</h5>
                            <p style="margin-bottom: 15px;">
                                ${company.name} emphasizes well-rounded candidates with strong fundamentals in mathematics, logical thinking,
                                and communication skills. The assessment tests your ability to work with clients and handle diverse
                                project requirements. Verbal ability is particularly important as you'll be working with global teams.
                            </p>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Easy-Medium Problems</strong><br>
                                    Arrays, Strings, Basic algorithms
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Communication Focus</strong><br>
                                    Grammar, Comprehension, Writing
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Domain Knowledge</strong><br>
                                    CS fundamentals, DBMS, Networks
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 2: Group Discussion (GD)</div>
                        <div style="background: #e7f3ff; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>👥 Group Size:</strong> 8-12 candidates | <strong>⏱️ Duration:</strong> 15-20 minutes | <strong>👨‍🏫 Moderator:</strong> HR Manager or Senior Consultant
                        </div>
                        
                        <p style="line-height: 1.8; margin-bottom: 20px;">
                            The Group Discussion round is crucial at ${company.name} as it evaluates your communication skills,
                            leadership qualities, and ability to work in teams. This round simulates client interaction scenarios
                            and tests your ability to present ideas clearly and handle diverse viewpoints professionally.
                        </p>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🗣️ Common GD Topics at ${company.name}</h5>
                                <ul style="line-height: 1.8;">
                                    <li><strong>Technology:</strong> "Impact of AI on job market", "Remote work vs Office work"</li>
                                    <li><strong>Business:</strong> "Startup culture vs Corporate culture", "Digital transformation challenges"</li>
                                    <li><strong>Social:</strong> "Social media impact on society", "Education system reforms"</li>
                                    <li><strong>Current Affairs:</strong> "Sustainable development goals", "Cybersecurity importance"</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🎯 Evaluation Criteria</h5>
                                <ul style="line-height: 1.8;">
                                    <li><strong>Content Quality (30%):</strong> Relevant points, logical arguments</li>
                                    <li><strong>Communication (25%):</strong> Clarity, fluency, pronunciation</li>
                                    <li><strong>Leadership (20%):</strong> Initiative, guiding discussion</li>
                                    <li><strong>Team Player (15%):</strong> Listening, building on others' ideas</li>
                                    <li><strong>Confidence (10%):</strong> Body language, eye contact</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 12px;">
                            <h5 style="color: #FFA500; margin-bottom: 15px;">💡 GD Success Strategy</h5>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Start Strong</strong><br>
                                    Begin with a clear definition or framework to structure the discussion
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Listen Actively</strong><br>
                                    Build on others' points and acknowledge good ideas before presenting yours
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Conclude Effectively</strong><br>
                                    Summarize key points and provide a balanced conclusion if possible
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 3: Technical Interview</div>
                        <div style="background: #fff3cd; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>👨‍💻 Interviewer Profile:</strong> Technical Lead or Project Manager with 5-7 years of experience
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">⏱️ Interview Structure (30-45 minutes)</h5>
                                <ul style="line-height: 1.8;">
                                    <li><strong>Introduction (5 minutes):</strong> Background, academic projects</li>
                                    <li><strong>Technical Concepts (15 minutes):</strong> CS fundamentals, programming</li>
                                    <li><strong>Problem Solving (15 minutes):</strong> 1-2 coding problems</li>
                                    <li><strong>Project Discussion (8 minutes):</strong> Your projects, technologies</li>
                                    <li><strong>Q&A (2 minutes):</strong> Your questions about role</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🎯 Key Focus Areas</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Programming fundamentals (C, Java, Python)</li>
                                    <li>Database concepts and SQL queries</li>
                                    <li>Object-Oriented Programming principles</li>
                                    <li>Basic data structures and algorithms</li>
                                    <li>Software development lifecycle knowledge</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 4: HR Interview</div>
                        <div style="background: #f8d7da; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>👩‍💼 Interviewer Profile:</strong> HR Manager or Talent Acquisition Specialist
                        </div>
                        
                        <p style="line-height: 1.8; margin-bottom: 20px;">
                            The HR round at ${company.name} focuses on cultural fit, behavioral assessment, and your alignment with ${company.name}'s values.
                            This is your opportunity to learn more about the role, team dynamics, and company culture.
                        </p>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🎭 Common Questions</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Tell me about yourself</li>
                                    <li>Why do you want to join ${company.name}?</li>
                                    <li>What are your career goals?</li>
                                    <li>How do you handle pressure and deadlines?</li>
                                    <li>Describe your strengths and weaknesses</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🌟 What They Look For</h5>
                                <ul style="line-height: 1.8;">
                                    <li><strong>Adaptability:</strong> Willingness to work on different technologies</li>
                                    <li><strong>Communication:</strong> Ability to interact with global clients</li>
                                    <li><strong>Learning Attitude:</strong> Eagerness to upskill and grow</li>
                                    <li><strong>Team Spirit:</strong> Collaborative approach to problem-solving</li>
                                    <li><strong>Commitment:</strong> Long-term career vision with the company</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`
  } else if (["accenture", "capgemini", "deloitte", "pwc"].includes(company.name.toLowerCase())) {
    // Consulting companies - include case study rounds
    roundsStructure = `
                <div class="rounds-timeline">
                    <div class="round-item">
                        <div class="round-title">Round 1: Online Assessment & Cognitive Test</div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-top: 20px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 10px;">📋 Test Structure</h5>
                                <ul>
                                    <li><strong>Duration:</strong> 90-120 minutes</li>
                                    <li><strong>Total Questions:</strong> 70-90</li>
                                    <li><strong>Sections:</strong> 4 main sections</li>
                                    <li><strong>Negative Marking:</strong> -0.25 for wrong answers</li>
                                    <li><strong>Cutoff:</strong> Typically 60-70% for ${company.name}</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 10px;">🧮 Section Breakdown</h5>
                                <ul>
                                    <li><strong>Cognitive Ability:</strong> 25-30 questions</li>
                                    <li><strong>Technical Knowledge:</strong> 20-25 questions</li>
                                    <li><strong>Communication Skills:</strong> 15-20 questions</li>
                                    <li><strong>Coding Problems:</strong> 2-3 questions</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 12px; margin-top: 20px;">
                            <h5 style="color: #FFA500; margin-bottom: 15px;">🧠 ${company.name} Cognitive Assessment</h5>
                            <p style="margin-bottom: 15px;">
                                ${company.name} uses advanced cognitive assessments to evaluate your analytical thinking, problem-solving approach,
                                and ability to work with complex business scenarios. The test includes pattern recognition, logical sequences,
                                and abstract reasoning questions that simulate real consulting challenges.
                            </p>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Pattern Recognition</strong><br>
                                    Visual patterns, sequences
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Logical Reasoning</strong><br>
                                    Analytical thinking, deduction
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>Business Acumen</strong><br>
                                    Basic business concepts
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 2: Case Study Analysis</div>
                        <div style="background: #e7f3ff; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>📊 Format:</strong> Individual presentation | <strong>⏱️ Duration:</strong> 60 minutes (30 min prep + 30 min presentation) | <strong>👨‍💼 Panel:</strong> Senior Consultants & Managers
                        </div>
                        
                        <p style="line-height: 1.8; margin-bottom: 20px;">
                            The case study round is the cornerstone of ${company.name}'s selection process. You'll receive a real business
                            scenario and need to analyze the problem, develop solutions, and present your recommendations. This round
                            evaluates your business thinking, analytical skills, and presentation abilities.
                        </p>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">📈 Typical Case Study Scenarios</h5>
                                <ul style="line-height: 1.8;">
                                    <li><strong>Market Entry:</strong> "Should Company X enter the Indian market?"</li>
                                    <li><strong>Digital Transformation:</strong> "How can a traditional bank digitize operations?"</li>
                                    <li><strong>Cost Optimization:</strong> "Reduce operational costs by 20% without layoffs"</li>
                                    <li><strong>Process Improvement:</strong> "Streamline supply chain for better efficiency"</li>
                                    <li><strong>Technology Implementation:</strong> "Implement AI solution for customer service"</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🎯 Evaluation Framework</h5>
                                <ul style="line-height: 1.8;">
                                    <li><strong>Problem Understanding (25%):</strong> Grasping key issues and constraints</li>
                                    <li><strong>Analytical Approach (30%):</strong> Structured thinking and methodology</li>
                                    <li><strong>Solution Quality (25%):</strong> Feasibility and innovation of recommendations</li>
                                    <li><strong>Presentation Skills (20%):</strong> Clarity, confidence, and persuasion</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 12px;">
                            <h5 style="color: #FFA500; margin-bottom: 15px;">🎯 Case Study Success Framework</h5>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>1. Structure</strong><br>
                                    Use frameworks like MECE, 5C's, or Porter's Five Forces
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>2. Analysis</strong><br>
                                    Break down problems into manageable components
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>3. Insights</strong><br>
                                    Provide actionable recommendations with rationale
                                </div>
                                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                                    <strong>4. Communication</strong><br>
                                    Present clearly with supporting data and visuals
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 3: Technical & Behavioral Interview</div>
                        <div style="background: #fff3cd; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>👨‍💻 Interviewer Profile:</strong> Senior Manager or Principal Consultant with domain expertise
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">⏱️ Interview Structure (45-60 minutes)</h5>
                                <ul style="line-height: 1.8;">
                                    <li><strong>Background Discussion (10 minutes):</strong> Academic projects, internships</li>
                                    <li><strong>Technical Assessment (20 minutes):</strong> Domain-specific questions</li>
                                    <li><strong>Behavioral Questions (20 minutes):</strong> Leadership, teamwork scenarios</li>
                                    <li><strong>Case Discussion (8 minutes):</strong> Follow-up on your case study</li>
                                    <li><strong>Q&A (2 minutes):</strong> Your questions about consulting life</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🎯 Key Assessment Areas</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Technical knowledge in your chosen domain</li>
                                    <li>Business acumen and industry awareness</li>
                                    <li>Leadership potential and initiative</li>
                                    <li>Client-facing communication skills</li>
                                    <li>Adaptability and learning agility</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 4: Partner/Director Interview</div>
                        <div style="background: #f8d7da; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>👩‍💼 Interviewer Profile:</strong> Partner, Director, or Practice Head
                        </div>
                        
                        <p style="line-height: 1.8; margin-bottom: 20px;">
                            The final round with senior leadership focuses on your strategic thinking, cultural fit with ${company.name},
                            and long-term potential. This is also your opportunity to understand the company's vision,
                            growth opportunities, and consulting culture.
                        </p>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🎭 Strategic & Vision Questions</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Where do you see the consulting industry in 5 years?</li>
                                    <li>How would you approach a completely new industry?</li>
                                    <li>What's your perspective on digital transformation?</li>
                                    <li>How do you handle ambiguous client requirements?</li>
                                    <li>What unique value would you bring to our team?</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🌟 Leadership & Culture Fit</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Describe a time you influenced a group decision</li>
                                    <li>How do you handle conflicting stakeholder interests?</li>
                                    <li>What motivates you to pursue consulting?</li>
                                    <li>How do you manage work-life balance in demanding roles?</li>
                                    <li>What questions do you have about our culture and values?</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`
  } else {
    // Default structure for other companies
    roundsStructure = `
                <div class="rounds-timeline">
                    <div class="round-item">
                        <div class="round-title">Round 1: Online Assessment Test</div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-top: 20px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 10px;">📋 Test Structure</h5>
                                <ul>
                                    <li><strong>Duration:</strong> 90-120 minutes</li>
                                    <li><strong>Total Questions:</strong> 60-80</li>
                                    <li><strong>Sections:</strong> 4 main sections</li>
                                    <li><strong>Negative Marking:</strong> -0.25 for wrong answers</li>
                                    <li><strong>Cutoff:</strong> Typically 60-70%</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 10px;">🧮 Section Breakdown</h5>
                                <ul>
                                    <li><strong>Quantitative Aptitude:</strong> 15-20 questions</li>
                                    <li><strong>Logical Reasoning:</strong> 15-20 questions</li>
                                    <li><strong>Technical MCQs:</strong> 20-25 questions</li>
                                    <li><strong>Coding Problems:</strong> 2-3 questions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 2: Technical Interview</div>
                        <div style="background: #fff3cd; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>👨‍💻 Interviewer Profile:</strong> Senior Software Engineer or Team Lead
                        </div>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">⏱️ Interview Structure (45-60 minutes)</h5>
                                <ul style="line-height: 1.8;">
                                    <li><strong>Introduction (5 minutes):</strong> Self-introduction, resume walkthrough</li>
                                    <li><strong>Technical Discussion (15 minutes):</strong> Projects, technologies used</li>
                                    <li><strong>Coding Round (25 minutes):</strong> Live coding problems</li>
                                    <li><strong>Q&A (10 minutes):</strong> Your questions about role/company</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🎯 Key Focus Areas</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Data Structures and Algorithms</li>
                                    <li>Object-Oriented Programming concepts</li>
                                    <li>Database fundamentals and SQL</li>
                                    <li>Problem-solving approach</li>
                                    <li>Communication and explanation skills</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="round-item">
                        <div class="round-title">Round 3: HR Interview</div>
                        <div style="background: #f8d7da; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                            <strong>👩‍💼 Interviewer Profile:</strong> HR Manager or Hiring Manager
                        </div>
                        
                        <p style="line-height: 1.8; margin-bottom: 20px;">
                            The HR round focuses on cultural fit, behavioral assessment, and your alignment with ${company.name}'s values.
                            This is your opportunity to learn more about the role, team dynamics, and company culture.
                        </p>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🎭 Common Questions</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Tell me about yourself</li>
                                    <li>Why do you want to join ${company.name}?</li>
                                    <li>What are your career goals?</li>
                                    <li>How do you handle pressure and deadlines?</li>
                                    <li>Describe your strengths and weaknesses</li>
                                </ul>
                            </div>
                            <div>
                                <h5 style="color: #333; margin-bottom: 15px;">🌟 What They Look For</h5>
                                <ul style="line-height: 1.8;">
                                    <li>Cultural fit and team compatibility</li>
                                    <li>Communication and interpersonal skills</li>
                                    <li>Motivation and career aspirations</li>
                                    <li>Problem-solving attitude</li>
                                    <li>Long-term commitment potential</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`
  }

  const detailPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${company.name} - Complete Placement Guide</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        .detail-page {
            padding: 100px 0 60px;
            min-height: 100vh;
        }
        .company-header {
            text-align: center;
            margin-bottom: 60px;
            background: linear-gradient(135deg, #FFA500 0%, #FF6347 100%);
            color: white;
            padding: 60px 0;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        /* Made logo much smaller - 60px x 40px instead of 120px x 80px */
        .company-header img {
            width: 60px;
            height: 40px;
            object-fit: contain;
            background: white;
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        .company-header h1 {
            font-size: 2.5rem;
            margin: 10px 0;
            display: flex;
            align-items: center;
            gap: 15px;
            justify-content: center;
        }
        .detail-section {
            background: white;
            margin-bottom: 40px;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border-left: 5px solid #FFA500;
        }
        .detail-section h3 {
            color: #FFA500;
            margin-bottom: 25px;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.8rem;
            border-bottom: 2px solid #FFA500;
            padding-bottom: 10px;
        }
        /* Enhanced back button with better positioning and functionality */
        .back-button {
            position: fixed;
            top: 20px;
            left: 20px;
            background: #FFA500;
            color: white;
            border: none;
            padding: 15px 25px;
            border-radius: 30px;
            cursor: pointer;
            z-index: 1000;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(255, 165, 0, 0.3);
            transition: all 0.3s ease;
        }
        .back-button:hover {
            background: #FF6347;
            transform: translateY(-2px);
        }
        .company-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        .stat-box {
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: white;
        }
        .rounds-timeline {
            position: relative;
            padding-left: 30px;
        }
        .rounds-timeline::before {
            content: '';
            position: absolute;
            left: 15px;
            top: 0;
            bottom: 0;
            width: 3px;
            background: #FFA500;
        }
        .round-item {
            position: relative;
            margin-bottom: 40px;
            background: #f8f9fa;
            padding: 30px;
            border-radius: 15px;
            margin-left: 20px;
        }
        .round-item::before {
            content: '';
            position: absolute;
            left: -35px;
            top: 30px;
            width: 20px;
            height: 20px;
            background: #FFA500;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 0 0 3px #FFA500;
        }
        .round-title {
            color: #FFA500;
            font-size: 1.4rem;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .question-category {
            background: white;
            margin: 20px 0;
            padding: 25px;
            border-radius: 12px;
            border-left: 4px solid #FFA500;
        }
        .question-list {
            list-style: none;
            padding: 0;
        }
        .question-list li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 20px;
        }
        .question-list li::before {
            content: '▶';
            color: #FFA500;
            position: absolute;
            left: 0;
        }
        .tips-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }
        .tip-card {
            background: linear-gradient(135deg, #FFA500 0%, #FF6347 100%);
            color: white;
            padding: 25px;
            border-radius: 15px;
        }
        .salary-breakdown {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        .salary-item {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
        }
        .content-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        .content-table th,
        .content-table td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        .content-table th {
            background: #FFA500;
            color: white;
        }
        .content-table tr:hover {
            background: #f5f5f5;
        }
    </style>
</head>
<body>
    <!-- Enhanced back button with proper onclick functionality -->
    <button class="back-button" onclick="window.location.href='iindex.html';" return true;">← Back to Companies</button>
    
    <div class="detail-page">
        <div class="container">
            <div class="company-header">
                <!-- Restructured header layout with logo inline with company name -->
                <h1>
                    <img src="${company.logo}" alt="${company.name} Logo" onerror="this.style.display='none'">
                    ${company.name}
                </h1>
                <p style="font-size: 1.2rem; max-width: 800px; margin: 0 auto;">${company.description}</p>
                <div class="company-stats-grid" style="max-width: 800px; margin: 40px auto 0;">
                    <div class="stat-box">
                        <div class="stat-number">${company.hiringCount}</div>
                        <div>Annual Hiring</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-number">${company.avgPackage}</div>
                        <div>Package Range</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-number">${company.difficulty}</div>
                        <div>Difficulty Level</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-number">${company.locations.length}</div>
                        <div>Office Locations</div>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>🏢 Company Overview & Background</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 30px;">
                    <div>
                        <h4 style="color: #333; margin-bottom: 15px;">Company Information</h4>
                        <table class="content-table">
                            <tr><td><strong>Founded:</strong></td><td>${company.founded || "1998"}</td></tr>
                            <tr><td><strong>Employees:</strong></td><td>${company.employees || "50,000+"}</td></tr>
                            <tr><td><strong>Revenue:</strong></td><td>${company.revenue || "$10+ billion"}</td></tr>
                            <tr><td><strong>Industry:</strong></td><td>${company.industry || "Technology"}</td></tr>
                            <tr><td><strong>Headquarters:</strong></td><td>${company.locations[0]}</td></tr>
                        </table>
                    </div>
                    <div>
                        <h4 style="color: #333; margin-bottom: 15px;">Office Locations in India</h4>
                        <ul style="list-style: none; padding: 0;">
                            ${company.locations.map((location) => `<li style="padding: 10px; background: #f8f9fa; margin: 5px 0; border-radius: 8px; border-left: 4px solid #FFA500;">📍 ${location}</li>`).join("")}
                        </ul>
                    </div>
                </div>
                
                <div style="background: #f8f9fa; padding: 25px; border-radius: 15px; margin-top: 30px;">
                    <h4 style="color: #FFA500; margin-bottom: 15px;">What Makes ${company.name} Special?</h4>
                    <p style="line-height: 1.8; margin-bottom: 15px;">
                        ${company.name} stands out in the technology industry for its innovative approach to solving complex problems and its commitment to employee growth.
                        The company offers a dynamic work environment where fresh graduates can learn from industry experts and work on cutting-edge technologies
                        that impact millions of users worldwide.
                    </p>
                    <p style="line-height: 1.8;">
                        With a strong focus on research and development, ${company.name} provides excellent opportunities for career advancement,
                        comprehensive training programs, and exposure to the latest technological trends in ${company.domain.join(", ").replace(/-/g, " ")}.
                    </p>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>🎯 Complete Placement Process Journey</h3>
                <div style="background: #e7f3ff; padding: 25px; border-radius: 15px; margin-bottom: 30px;">
                    <h4 style="color: #004085;">📊 Process Statistics</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: #FFA500;">4-6</div>
                            <div>Total Rounds</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: #FFA500;">2-3 weeks</div>
                            <div>Process Duration</div>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2rem; font-weight: bold; color: #FFA500;">15-20%</div>
                            <div>Selection Rate</div>
                        </div>
                    </div>
                </div>
                
                ${roundsStructure}
            </div>
        </div>
    </div>
</body>
</html>`

  // Open in new window/tab
  const newWindow = window.open("")
  newWindow.document.write(detailPage)

 
}

// Draw hiring trends chart
function drawHiringChart() {
  const canvas = document.getElementById("hiringChart")
  const ctx = canvas.getContext("2d")

  // Sample data for top hiring companies
  const chartData = [
    { name: "TCS", hiring: 5000 },
    { name: "Infosys", hiring: 4000 },
    { name: "Wipro", hiring: 3000 },
    { name: "Accenture", hiring: 2000 },
    { name: "Amazon", hiring: 1500 },
    { name: "Google", hiring: 1200 },
  ]

  const maxHiring = Math.max(...chartData.map((d) => d.hiring))
  const barWidth = canvas.width / chartData.length - 20
  const barMaxHeight = canvas.height - 60

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Draw bars
  chartData.forEach((data, index) => {
    const barHeight = (data.hiring / maxHiring) * barMaxHeight
    const x = index * (barWidth + 20) + 10
    const y = canvas.height - barHeight - 30

    // Create gradient
    const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight)
    gradient.addColorStop(0, "#FFA500")
    gradient.addColorStop(1, "#FF6347")

    // Draw bar
    ctx.fillStyle = gradient
    ctx.fillRect(x, y, barWidth, barHeight)

    // Draw company name
    ctx.fillStyle = "#000"
    ctx.font = "12px DM Sans"
    ctx.textAlign = "center"
    ctx.fillText(data.name, x + barWidth / 2, canvas.height - 10)

    // Draw hiring count
    ctx.fillStyle = "#FFA500"
    ctx.font = "bold 10px DM Sans"
    ctx.fillText(data.hiring, x + barWidth / 2, y - 5)
  })
}

document.addEventListener("DOMContentLoaded", () => {
  showLoading()
  hideLoading()

  // Enhanced filter functionality
  document.getElementById("domainFilter").addEventListener("change", applyFilters)
  document.getElementById("searchInput").addEventListener("input", applyFilters)
  document.getElementById("filterButton").addEventListener("click", applyFilters)

  // Enhanced search with Enter key
  document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      applyFilters()
    }
  })
})

function showCompanyDetails(companyId) {
  const company = allCompanies.find((c) => c.id === companyId)
  if (!company) return

  const detailsContainer = document.getElementById("company-details")
  const companiesContainer = document.getElementById("companies-container")

  // Hide companies list and show details
  companiesContainer.style.display = "none"
  detailsContainer.style.display = "block"
  detailsContainer.innerHTML = createCompanyDetailPage(company)
}

function goBackToCompanies() {
  const detailsContainer = document.getElementById("company-details")
  const companiesContainer = document.getElementById("companies-container")

  // Hide details and show companies list
  detailsContainer.style.display = "none"
  companiesContainer.style.display = "block"
}
