import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const CourseCard = ({ title, imageUrl, price, originalPrice, discount }) => (
  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
    <div className="courses-card text-center p-3 border rounded shadow-sm">
      <img src={imageUrl} alt={title} className="courses-image img-fluid rounded mb-3" />
      <h5 className="courses-title mb-2">{title}</h5>

      {/* Live Classes & Project Tags */}
      <div className="courses-features d-flex justify-content-center mb-3">
        <span className="badge bg-danger me-2">Classes</span>
        <span className="badge bg-success">Project</span>
      </div>

      {/* Pricing & Discount */}
      <div className="courses-pricing d-flex justify-content-center align-items-center">
        <p className="text-success fw-bold mb-0 me-2">₹ {price.toFixed(2)}</p>
        <p className="text-muted text-decoration-line-through mb-0 me-2">₹ {originalPrice.toFixed(2)}</p>
      </div>
      <p className="text-primary fw-bold mb-0">({discount}% off)</p>
    </div>
  </div>
);

const Courses = () => {
  const courses = [
    { title: "Python Course", imageUrl: "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg", price: 4500, originalPrice: 9000, discount: 50 },
    { title: "JavaScript Mastery", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", price: 4000, originalPrice: 8000, discount: 50 },
    { title: "React.js Development", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsmfX7KzLyuPTWp71LdXnjzpgoCdflNQFzg&s", price: 6000, originalPrice: 12000, discount: 50 },
    { title: "Machine Learning", imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*cG6U1qstYDijh9bPL42e-Q.jpeg", price: 7000, originalPrice: 14000, discount: 50 },
    { title: "C++ Data Structures", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", price: 3500, originalPrice: 7000, discount: 50 },
    { title: "Cyber Security Basics", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHn68-VsE7VrVPrsb3x0IoqFFNVUTxzVLgQ&s", price: 5000, originalPrice: 10000, discount: 50 },
    { title: "Full Stack Web Dev", imageUrl: "https://www.slaconsultantsindia.com/wp_files/wp-content/uploads/2018/01/full-stack-developer-php.jpg", price: 7500, originalPrice: 15000, discount: 50 },
    { title: "Android App Dev", imageUrl: "https://admin.tops-int.com/storage/webinar/icons/15362.JPG", price: 6500, originalPrice: 13000, discount: 50 },
    { title: "Ethical Hacking", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbMdFZ34oI2XcPhzpPAu7PXi4lPikzKULzw&s", price: 8000, originalPrice: 16000, discount: 50 },
    { title: "Data Science", imageUrl: "https://media.assettype.com/analyticsinsight%2F2024-07%2Fafccd6ac-6bc3-4872-954a-82710c8b0ca3%2FTop_10_Best_and_Free_Data_Science_Certification_Courses_2019_2.png", price: 9000, originalPrice: 18000, discount: 50 },
    { title: "AI & Machine Learning", imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/9/XM/YT/PK/83343488/artificial-intelligence-and-machine-learning-training.jpeg", price: 8500, originalPrice: 17000, discount: 50 },
    { title: "UI/UX Design", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", price: 4000, originalPrice: 8000, discount: 50 }
  ];

  return (
    <>
      <Menu />
      <div className="courses">
        {/* Gradient Banner */}
        <div className="courses-banner">
          <h1 className="text-center text-white">Courses</h1>
          <p className="courses-subtitle">Unlock Your Potential with Our Top Courses!</p>
        </div>

        <div className="container py-4">
          <div className="row g-4">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary">Explore Courses →</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;