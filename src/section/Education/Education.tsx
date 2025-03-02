import { educationData } from "../../Content/education";

const Education = () => {
  return (
    <section id="Education-section">
      <h2 className="font-semibold mb-4 text-PrimaryBase text-xl">Education</h2>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
            <p className="text-gray-700">{edu.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
