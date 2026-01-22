require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');
const Blog = require('./models/Blog');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Seed Admin
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@captonvisa.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

    const existingAdmin = await Admin.findOne({ email: adminEmail });
    
    if (existingAdmin) {
      console.log('⚠️ Admin already exists:', adminEmail);
    } else {
      await Admin.create({
        email: adminEmail,
        password: adminPassword,
        name: 'Admin'
      });
      console.log('✅ Admin created:', adminEmail);
    }

    // Seed sample blogs (optional - only if no blogs exist)
    const blogCount = await Blog.countDocuments();
    
    if (blogCount === 0) {
      const sampleBlogs = [
        {
          title: 'New Visa Rules for UK Students in 2026',
          excerpt: 'The UK government has announced new changes to the PSW visa. Here is what you need to know before applying.',
          content: 'The UK government has recently announced significant changes to the Post-Study Work (PSW) visa that will affect international students planning to study in the UK. These changes are designed to make the UK more competitive in attracting global talent while ensuring the integrity of the immigration system.\n\nKey changes include extended work rights, streamlined application processes, and new pathways to permanent residency. Students graduating from UK universities will now have enhanced opportunities to gain work experience and potentially settle in the UK.',
          category: 'Visa Updates',
          author: 'Admin',
          image: 'https://images.unsplash.com/photo-1526304640152-d4619684e484?w=800'
        },
        {
          title: 'Why Germany is the Best Destination for Engineers',
          excerpt: 'With zero tuition fees and a high demand for skilled engineers, Germany offers the best ROI for engineering students.',
          content: 'Germany has emerged as one of the top destinations for engineering students worldwide. The country offers a unique combination of world-class education, minimal tuition fees at public universities, and excellent career prospects.\n\nGerman universities are renowned for their engineering programs, particularly in automotive, mechanical, and electrical engineering. The country is home to global giants like BMW, Mercedes-Benz, Siemens, and Bosch, offering abundant internship and job opportunities.',
          category: 'Study Abroad',
          author: 'Kaushik',
          image: 'https://images.unsplash.com/photo-1599946347371-88a3143c79f9?w=800'
        },
        {
          title: 'MBBS in Russia vs Uzbekistan: Comprehensive Comparison',
          excerpt: 'Confused between Russia and Uzbekistan? We compare fees, climate, FMGE passing rates, and student life.',
          content: 'Choosing between Russia and Uzbekistan for MBBS can be challenging. Both countries offer quality medical education at affordable prices, but there are key differences to consider.\n\nRussia offers more established universities with longer histories of teaching international students. However, the climate can be challenging for students from tropical countries. Uzbekistan, on the other hand, offers a more moderate climate and rapidly improving medical education infrastructure.',
          category: 'MBBS',
          author: 'Dr. A. Sharma',
          image: 'https://images.unsplash.com/photo-1576091160550-21733e99dbb9?w=800'
        },
        {
          title: 'How to Score 8.0 in IELTS Writing Task 2',
          excerpt: 'Tips and tricks to master the essay writing section of IELTS. Structure, vocabulary, and common mistakes to avoid.',
          content: 'Achieving a band score of 8.0 in IELTS Writing Task 2 requires a combination of strong essay structure, advanced vocabulary, and clear argumentation.\n\nStart by understanding the question type - whether it is asking for your opinion, both sides of an argument, or causes and solutions. Plan your essay for 5 minutes before writing. Use a clear four-paragraph structure: introduction, body paragraph 1, body paragraph 2, and conclusion.',
          category: 'Coaching',
          author: 'Language Team',
          image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800'
        }
      ];

      await Blog.insertMany(sampleBlogs);
      console.log('✅ Sample blogs created:', sampleBlogs.length);
    } else {
      console.log('⚠️ Blogs already exist, skipping sample data');
    }

    console.log('\n🎉 Database seeding completed!');
    console.log('📧 Admin Email:', adminEmail);
    console.log('🔐 Admin Password:', adminPassword);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding Error:', error);
    process.exit(1);
  }
};

seedDatabase();
