"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Arabic Fake News Detection",
    description:
      "Used machine learning models to classify Arabic news articles as credible or non-credible.",
    image: "/images/projects/arabic-fake-news.jpg",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Natural%20Language%20Processing%20(NLP)/Workshop%202%20Arabic%20Natural%20Language%20Processing%20(NLP)",
    categories: ["NLP", "Machine Learning", "Deep Learning"],
  },
  {
    title: "Car Sales Volume and Resale Price Prediction",
    description:
      "Evaluated and tuned machine learning models to predict car sales using features like price and size.",
    image: "/images/projects/car-sales.png",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Machine%20Learning%20II",
    categories: ["Machine Learning", "Data Analysis"],
  },
  {
    title: "Exploring Autoencoder Architectures",
    description:
      "Developed multiple autoencoder architectures for tasks like image reconstruction and denoising.",
    image: "/images/projects/autoencoder.jpg",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Deep%20learning/Workshop%2003",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Sentence Auto-Complete with RNNs",
    description:
      "Built a sentence auto-complete system using recurrent neural networks (RNNs) with LSTM architecture.",
    image: "/images/projects/rnn.jpg",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Deep%20learning/Workshop%2004",
    categories: ["NLP", "Machine Learning", "Deep Learning"],
  },
  {
    title: "Time Series Forecasting for Electricity Transformers",
    description:
      "Predicted oil temperature of electricity transformers using time series forecasting models.",
    image: "/images/projects/time-series.png",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Machine%20learning%20applications",
    categories: ["Machine Learning", "Deep Learning", "Data Analysis"],
  },
  {
    title: "CNN for Ear Print Classification",
    description:
      "Developed a Convolutional Neural Network (CNN) for classifying ear prints.",
    image: "/images/projects/cnn.png",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Deep%20learning/Workshop%2002",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "MLP from Scratch for Fruit Classification",
    description:
      "Built a multi-layer perceptron (MLP) from scratch to classify apples and lemons.",
    image: "/images/projects/mlp.jpg",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/3rd%20semester/Deep%20learning/Workshop%2001",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Blood Vessel Segmentation",
    description:
      "Evaluated logistic regression and GLMs for binary segmentation of retinal blood vessel pixels.",
    image: "/images/projects/blood-vessel.png",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/2nd%20semester/Machine%20Learning%201/Workshop",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },

  ///////////////////////
  {
    title: "SpaceX Falcon 9",
    description:
      "Predicting the successful landing of a rocket based on various factors such as trajectory, speed, and environmental conditions.",
    image: "/images/projects/IBM SpaceX Falcon9.png",
    // github: "https://github.com/Kmohamedalie/IBM-Data-Science-SpaceX-Falcon9 ",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Object Detection",
    description:
      "Computer vision techniques using YOLO (v5 and v8n) for object detection and real-time image processing.",
    image: "/images/projects/yolo.png",
    // github: "https://github.com/Kmohamedalie/YOLO-object-detection/tree/master",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "COVID-19 Death",
    description:
      "Live streaming has been increasingly popular from 2020 to the present, revolutionizing online content consumption.",
    image: "/images/projects/Devops-SE.png",
    // github: "https://kmohamedalie.github.io/DTM-SE-DevOps_final_project/#",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "OpenAI ChatGPT chatbot",
    description:
      "The OpenAI ChatGPT chatbot is an advanced AI-powered conversational assistant designed to generate human-like responses and assist users with a wide range of topics.",
    image: "/images/projects/Chatbot.jpg",
    // github: "https://github.com/Kmohamedalie/Chatbot",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Handwritten digit classification",
    description:
      "Handwritten digit classification is the process of using machine learning models to recognize and categorize handwritten numbers from images.",
    image: "/images/projects/mnist.png",
    // github: "https://github.com/Kmohamedalie/MNIST",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Predicting Iris flower species",
    description:
      "Predicting the species of an Iris flower based on its unique features.",
    image: "/images/projects/iris-streamlit.png",
    // github: "https://iris-model-deployment.streamlit.app/",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Detecting parasitized cell",
    description:
      "Detecting a cell that has been parasitized by a foreign organism.",
    image: "/images/projects/malaria.png",
    // github: "https://github.com/Kmohamedalie/Malaria_Screener",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Parkinson Disease Detection",
    description:
      "Parkinson's Disease Detection involves using various medical and technological methods to accurately identify the early signs and symptoms of Parkinson's disease, allowing for timely intervention and better management of the condition.",
    image: "/images/projects/parkinson.jpg",
    // github:
    //   "https://github.com/Kmohamedalie/Oxford-Parkinson-Diesease-Detection?tab=readme-ov-file",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Using Facebook metrics",
    description:
      "Using Facebook metrics, businesses can gain valuable insights into user behavior, engagement patterns, and campaign performance, helping them make data-driven decisions to improve their marketing strategies and achieve better results.",
    image: "/images/projects/facebook-metrics.png",
    // github:
    //   "https://github.com/Kmohamedalie/Facebook-Metrics-Regression/tree/master",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "iTunes API for Data Science",
    description:
      "The iTunes API provides access to media data, useful for data science applications.",
    image: "/images/projects/itunes-API.png",
    // github:
    //   "https://github.com/Kmohamedalie/iTunes_API-for-Datascience/tree/master",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Facial analysis (deepface)",
    description:
      "Evaluated logistic regression and GLMs for binary segmentation of retinal blood vessel pixels.",
    image: "/images/projects/deepFace.png",
    // github: "https://github.com/Kmohamedalie/DeepFace-Hands-on-practice",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Heart Disease Detection",
    description:
      "Heart disease detection using SVM involves classifying patient data to predict the likelihood of heart conditions.",
    image: "/images/projects/heart.png",
    // github:
    //   "https://github.com/Kmohamedalie/Detectecting_Heart_Disease-SVM/tree/master",
    categories: ["Machine Learning", "Deep Learning", "Computer Vision"],
  },
  {
    title: "Image classification",
    description:
      "Image classification involves categorizing images into predefined labels or categories.",
    image: "/images/projects/cifar10.png",
    // github: "https://github.com/Kmohamedalie/CIFAR10_ML-vs-DL",
    categories: ["Machine Learning", "Deep Learning"],
  },
  {
    title: "Life Expectancy vs Income",
    description:
      "Higher income levels are often associated with longer life expectancy due to better access to healthcare and living conditions.",
    image: "/images/projects/gapminder.png",
    // github: "https://gapminder-animate.netlify.app/",
    categories: ["Machine Learning", "Deep Learning"],
  },

  //////////////////////////////

  {
    title: "Image Processing Techniques",
    description:
      "Explored image compression and frequency filtering with JPEG and Fourier transforms.",
    image: "/images/projects/image-processing.jpg",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/2nd%20semester/Image%20Processing%20and%20Computer%20Vision/Workshop%2002",
    categories: ["Computer Vision"],
  },
  {
    title: "AI Nexus Website",
    description: "Developed the official website for the AI Nexus Club.",
    image: "/images/projects/ai-nexus.jpeg",
    // github: "https://github.com/MoncefDj/AINex-website",
    categories: ["Software Development"],
  },
  {
    title: "40 Tasks to Learn Image Manipulation",
    description: "A list of 40 tasks related to image processing.",
    image: "/images/projects/image-tasks.jpg",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/1st%20semester/Digital%20Image",
    categories: ["Computer Vision"],
  },
  {
    title: "Exploring Algerian Forest Fire Data",
    description:
      "A mini-project focused on exploratory data analysis and visualization of Algerian forest fire data.",
    image: "/images/projects/forest-fire.png",
    // github:
    //   "https://github.com/MoncefDj/AI-DS-Masters/tree/main/1st%20semester/Data%20exploration%20and%20visualization",
    categories: ["Data Analysis"],
  },
  {
    title: "Product Stocking Optimization",
    description:
      "A desktop application for managing hazardous materials and optimizing product stocking.",
    image: "/images/projects/ipm.jpg",
    // github: "https://github.com/MoncefDj/IPM",
    categories: ["Software Development"],
  },
];

const categoryConfig = {
  All: { priority: 1, description: "All projects" },
  "Machine Learning": { priority: 2, description: "Machine learning projects" },
  "Deep Learning": {
    priority: 3,
    description: "Neural networks and deep learning projects",
  },
  "Computer Vision": {
    priority: 4,
    description: "Image processing and computer vision projects",
  },
  "Data Analysis": {
    priority: 5,
    description: "Data exploration and visualization projects",
  },
  NLP: { priority: 6, description: "Natural Language Processing projects" },
  "Software Development": {
    priority: 7,
    description: "Full-stack development projects",
  },
};

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const counts: { [key: string]: number } = { All: projects.length };
    projects.forEach((project) => {
      project.categories.forEach((category) => {
        counts[category] = (counts[category] || 0) + 1;
      });
    });

    return Object.entries(categoryConfig)
      .sort((a, b) => a[1].priority - b[1].priority)
      .map(([category, config]) => ({
        name: category,
        count: counts[category] || 0,
        ...config,
      }));
  }, []);

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) =>
        selectedCategory === "All"
          ? true
          : project.categories.includes(selectedCategory)
      ),
    [selectedCategory]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my portfolio of AI and data science projects, showcasing
            practical applications of machine learning and data analysis.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(({ name, count }) => (
              <Button
                key={name}
                variant={selectedCategory === name ? "default" : "outline"}
                onClick={() => setSelectedCategory(name)}
                className="rounded-full"
              >
                {name}{" "}
                <span className="ml-2 text-xs opacity-70">({count})</span>
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.categories.map((category, catIndex) => (
                      <Badge
                        key={catIndex}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                  {/* <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div> */}
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
