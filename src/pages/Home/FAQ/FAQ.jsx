import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Container } from "@mui/material";

export default function BasicAccordion() {
  return (
    <div>
      <SectionTitle heading={'FAQ'}></SectionTitle>
      <Container maxWidth="lg">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
    </div>
  );
}

// import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// const Faq = () => {
//   return (
//     <div className="container mx-auto p-8">
//       <SectionTitle heading={'Testimonials'}></SectionTitle>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <img
//             className="w-16 h-16 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500"
//             src="https://placekitten.com/100/100" // Replace with your image source
//             alt="Testimonial Person"
//           />
//           <p className="text-gray-800 text-center mb-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <p className="text-blue-500 text-center font-bold">John Doe</p>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <img
//             className="w-16 h-16 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500"
//             src="https://placekitten.com/100/100" // Replace with your image source
//             alt="Testimonial Person"
//           />
//           <p className="text-gray-800 text-center mb-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <p className="text-blue-500 text-center font-bold">Jane Smith</p>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <img
//             className="w-16 h-16 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500"
//             src="https://placekitten.com/100/100" // Replace with your image source
//             alt="Testimonial Person"
//           />
//           <p className="text-gray-800 text-center mb-4">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//           <p className="text-blue-500 text-center font-bold">Mike Johnson</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Faq;
