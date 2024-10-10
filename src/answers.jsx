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

export default function Answers() {
  const tabData = {
    Ex: {
      question: "What are the 5 filipino organizations at UCI",
      answers: {
        1: "Kababayan",
        2: "PUSO",
        3: "PASS",
        4: "FUSION",
        5: "Alyansa"
      }
    },
    Q1: {
      question: "What are the 5 most spoken dialects in the Philippines?",
      answers: {
        1: "Tagalog",
        2: "Cebuano",
        3: "Ilocano",
        4: "Bisaya",
        5: "Kapampangan",
      },
    },
    Q2: {
      question: "What are the top 5 populated cities in the Philippines?",
      answers: {
        1: "Quezon City",
        2: "Manila",
        3: "Caloocan",
        4: "Davao City",
        5: "Cebu",
      },
    },
    Q3: {
      question: "Who are the 5 executive board members in FUSION?",
      answers: {
        1: "Hailey",
        2: "Jhaneen",
        3: "Justin",
        4: "Cayz",
        5: "Arvin",
      },
    },
    Q4: {
      question: "What are the 5 sides you can get at Jollibee?",
      answers: {
        1: "Steamed Rice",
        2: "Adobo Rice",
        3: "Spaghetti",
        4: "Mashed Potato",
        5: "French Fries",
      },
    },
    Q5: {
      question: "What are the FUSION pillars?",
      answers: {
        1: "Science and Engineering",
        2: "Professionalism",
        3: "Support",
        4: "Academics",
        5: "Culture",
      },
    },
    Q6: {
      question: "What are the top 5 states with the highest population of Fil-Ams?",
      answers: {
        1: "California",
        2: "Hawaii",
        3: "Texas",
        4: "Washington",
        5: "Nevada",
      },
    },
    Q7: {
      question: "What are the top 5 most popular Filipino desserts?",
      answers: {
        1: "Halo-Halo",
        2: "Leche Flan",
        3: "Cassava Cake",
        4: "Biko",
        5: "Taho",
      },
    },
    Q8: {
      question: "Who are 5 famous Fil-Am music artist?",
      answers: {
        1: "Bruno Mars",
        2: "Olivia Rodrigo",
        3: "Jeremy Passion",
        4: "Steve Lacy",
        5: "HER",
      },
    },
    // You can add more tabs/questions here...
  };

  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

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
                        className="flex cursor-pointer text-2xl my-2 w-1/2 justify-center items-center h-16 rounded-xl border-green-500 text-green-500 bg-white border-2"
                        variants={buttonVariants} // Apply individual button animation
                        whileHover={{ scale: 1.1 }}
                      >
                        {tabData[tabKey].answers[num]} {/* Always show the answer */}
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
