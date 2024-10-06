// import { useState } from "react";
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import p1 from "./assets/pl.svg";
// import p2 from "./assets/pr.svg";
// import { motion } from "framer-motion";

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// };

// export default function Panels() {
//   const tabData = {
//     Q1: {
//       question: "What are the 5 most spoken dialects in the Philippines?",
//       answers: {
//         1: "Tagalog",
//         2: "Cebuano",
//         3: "Ilocano",
//         4: "Hiligaynon",
//         5: "Bikolano",
//       },
//     },
//     Q2: {
//       question: "What are the top 5 programming languages in 2024?",
//       answers: {
//         1: "JavaScript",
//         2: "Python",
//         3: "Java",
//         4: "Go",
//         5: "Rust",
//       },
//     },
//     Q3: {
//       question: "What are the top 5 programming languages in 2024?",
//       answers: {
//         1: "JavaScript",
//         2: "Python",
//         3: "Java",
//         4: "Go",
//         5: "Rust",
//       },
//     },
//     Q4: {
//       question: "What are the top 5 programming languages in 2024?",
//       answers: {
//         1: "JavaScript",
//         2: "Python",
//         3: "Java",
//         4: "Go",
//         5: "Rust",
//       },
//     },
//     Q5: {
//       question: "What are the top 5 programming languages in 2024?",
//       answers: {
//         1: "JavaScript",
//         2: "Python",
//         3: "Java",
//         4: "Go",
//         5: "Rust",
//       },
//     },
//     Q6: {
//       question: "What are the top 5 programming languages in 2024?",
//       answers: {
//         1: "JavaScript",
//         2: "Python",
//         3: "Java",
//         4: "Go",
//         5: "Rust",
//       },
//     },
//     Q7: {
//       question: "What are the top 5 programming languages in 2024?",
//       answers: {
//         1: "JavaScript",
//         2: "Python",
//         3: "Java",
//         4: "Go",
//         5: "Rust",
//       },
//     },
//     Q8: {
//       question: "What are the top 5 programming languages in 2024?",
//       answers: {
//         1: "JavaScript",
//         2: "Python",
//         3: "Java",
//         4: "Go",
//         5: "Rust",
//       },
//     },
//     // You can add more tabs/questions here...
//   };

//   const [clicked, setClicked] = useState({});
//   const [isOpen, setIsOpen] = useState(true);
//   const [activeTab, setActiveTab] = useState(0); // Track the active tab

//   // Handle click to toggle between number and word
//   const handleClick = (tab, num) => {
//     setClicked((prevClicked) => ({
//       ...prevClicked,
//       [tab]: {
//         ...prevClicked[tab],
//         [num]: !prevClicked[tab]?.[num], // Toggle between true and false for specific tab and number
//       },
//     }));
//   };

//   // Handle tab change to trigger animation
//   const handleTabChange = (index) => {
//     setIsOpen(false); // Close the animation
//     setTimeout(() => {
//       setActiveTab(index); // Switch tab after the animation closes
//       setIsOpen(true); // Open the animation again
//     }, 300); // Set a delay matching the animation duration
//   };

//   return (
//     <div className="relative overflow-hidden">
//       <div className="flex justify-center items-center p-10 bg-[#F4F4F4] h-dvh">
//         <Tabs
//           align="center"
//           gap="50px"
//           variant="soft-rounded"
//           className="w-1/2 bg-white rounded-xl pt-5 z-50"
//           colorScheme="yellow"
//           onChange={handleTabChange} // Add tab change handler
//         >
//           <TabList mb="1em">
//             {Object.keys(tabData).map((tabKey, index) => (
//               <Tab key={tabKey}>{tabKey}</Tab>
//             ))}
//           </TabList>

//           {/* Animation wrapping the tab panels */}
//           <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>
//             <TabPanels>
//               {Object.keys(tabData).map((tabKey, index) => (
//                 <TabPanel key={tabKey}>
//                   <p className="text-3xl pb-10">{tabData[tabKey].question}</p>
//                   <div>
//                     {Object.keys(tabData[tabKey].answers).map((num) => (
//                       <div
//                         key={num}
//                         onClick={() => handleClick(tabKey, num)}
//                         className="flex cursor-pointer text-2xl my-2 w-1/2 justify-center items-center bg-[#FAC80A] h-16 rounded-xl"
//                       >
//                         {clicked[tabKey]?.[num]
//                           ? tabData[tabKey].answers[num]
//                           : num}
//                       </div>
//                     ))}
//                   </div>
//                 </TabPanel>
//               ))}
//             </TabPanels>
//           </motion.div>
//         </Tabs>
//       </div>
//       <img src={p1} className="absolute top-0 right-0" />
//       <img src={p2} className="absolute bottom-0 left-0" />
//     </div>
//   );
// }

import { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import p1 from "./assets/pl.svg";
import p2 from "./assets/pr.svg";
import { motion } from "framer-motion";

// Staggered animation for each button
const buttonContainerVariants = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time delay between each button animation
    },
  },
  closed: {
    opacity: 0,
  },
};

// Variants for individual buttons to move from left to right
const buttonVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function Panels() {
  const tabData = {
    Q1: {
      question: "What are the 5 most spoken dialects in the Philippines?",
      answers: {
        1: "Tagalog",
        2: "Cebuano",
        3: "Ilocano",
        4: "Hiligaynon",
        5: "Bikolano",
      },
    },
    Q2: {
      question: "What are the top 5 programming languages in 2024?",
      answers: {
        1: "JavaScript",
        2: "Python",
        3: "Java",
        4: "Go",
        5: "Rust",
      },
    },
    Q3: {
      question: "What are the top 5 programming languages in 2024?",
      answers: {
        1: "JavaScript",
        2: "Python",
        3: "Java",
        4: "Go",
        5: "Rust",
      },
    },
    Q4: {
      question: "What are the top 5 programming languages in 2024?",
      answers: {
        1: "JavaScript",
        2: "Python",
        3: "Java",
        4: "Go",
        5: "Rust",
      },
    },
    Q5: {
      question: "What are the top 5 programming languages in 2024?",
      answers: {
        1: "JavaScript",
        2: "Python",
        3: "Java",
        4: "Go",
        5: "Rust",
      },
    },
    Q6: {
      question: "What are the top 5 programming languages in 2024?",
      answers: {
        1: "JavaScript",
        2: "Python",
        3: "Java",
        4: "Go",
        5: "Rust",
      },
    },
    Q7: {
      question: "What are the top 5 programming languages in 2024?",
      answers: {
        1: "JavaScript",
        2: "Python",
        3: "Java",
        4: "Go",
        5: "Rust",
      },
    },
    Q8: {
      question: "What are the top 5 programming languages in 2024?",
      answers: {
        1: "JavaScript",
        2: "Python",
        3: "Java",
        4: "Go",
        5: "Rust",
      },
    },
    // You can add more tabs/questions here...
  };

  const [clicked, setClicked] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  // Handle click to toggle between number and word
  const handleClick = (tab, num) => {
    setClicked((prevClicked) => ({
      ...prevClicked,
      [tab]: {
        ...prevClicked[tab],
        [num]: !prevClicked[tab]?.[num], // Toggle between true and false for specific tab and number
      },
    }));
  };

  // Handle tab change to trigger animation
  const handleTabChange = (index) => {
    setIsOpen(false); // Close the animation
    setTimeout(() => {
      setActiveTab(index); // Switch tab after the animation closes
      setIsOpen(true); // Open the animation again
    }, 300); // Set a delay matching the animation duration
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex justify-center items-center p-10 bg-[#F4F4F4] h-dvh">
        <Tabs
          align="center"
          gap="50px"
          variant="soft-rounded"
          className="w-1/2 bg-white rounded-xl pt-5 z-50"
          colorScheme="yellow"
          onChange={handleTabChange} // Add tab change handler
        >
          <TabList mb="1em">
            {Object.keys(tabData).map((tabKey, index) => (
              <Tab key={tabKey}>{tabKey}</Tab>
            ))}
          </TabList>

          {/* Animation wrapping the tab panels */}
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={buttonContainerVariants} // Apply staggered container animation
          >
            <TabPanels>
              {Object.keys(tabData).map((tabKey, index) => (
                <TabPanel key={tabKey}>
                  <p className="text-3xl pb-10">{tabData[tabKey].question}</p>
                  <motion.div
                    className="button-container"
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    variants={buttonContainerVariants}
                  >
                    {Object.keys(tabData[tabKey].answers).map((num) => (
                      <motion.div
                        key={num}
                        onClick={() => handleClick(tabKey, num)}
                        className={`flex cursor-pointer text-2xl my-2 w-1/2 justify-center items-center h-16 rounded-xl ${
                            clicked[tabKey]?.[num]
                              ? "border-green-500 text-green-500 bg-white border-2" // Color when clicked
                              : "bg-[#FAC80A] text-black" // Default color
                          }`}
                        variants={buttonVariants} // Apply individual button animation
                        whileHover={{ scale: 1.1 }}
                      >
                        {clicked[tabKey]?.[num]
                          ? tabData[tabKey].answers[num]
                          : num}
                      </motion.div>
                    ))}
                  </motion.div>
                </TabPanel>
              ))}
            </TabPanels>
          </motion.div>
        </Tabs>
      </div>
      <img src={p1} className="absolute top-0 right-0" />
      <img src={p2} className="absolute bottom-0 left-0" />
    </div>
  );
}
