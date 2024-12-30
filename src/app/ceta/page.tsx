import React from "react";

export default function Ceta() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      <div className="content md:w-1/3 mx-auto mb-8">
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">
          <a href="https://github.com/ukhan1219/CETA" className="hoverlink">
            Corporate Entity Tracking Automation{">"}
          </a>
        </h1>
        <p className="text-left mb-8 text-sm font-extralight">
          <strong>Updated:</strong> April 2, 2024
        </p>

        <p className="text-left text-3xl font-medium md:break-words mb-2">
          Machine learning research project at the University of Central Florida
          (UCF)
        </p>
        <p className="text-left md:break-words mb-12 font-light">
          CETA focuses on analyzing and understanding global corporate entities
          through a large historical dataset with records dating as far back as
          1930. Objectives include tracking foreign ownership, influence, and
          illegal activities, while making temporal predictions regarding the
          longevity of companies based on their attributes.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">
          Project Overview
        </h2>
        <p className="text-left mb-4 font-light">
          The cornerstone of my contribution is the development of a custom
          RandomForestRegressor model, designed to predict how long a company is
          likely to last based on its attributes. I&#39;m continually
          fine-tuning the model for improved accuracy and expanded capabilities.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">
          Tools and Technologies Used
        </h3>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <strong>RandomForestRegressor</strong>: Machine learning model for
            predictive analysis.
          </li>
          <li>
            <strong>NetworkX</strong>: Creating and analyzing corporate entity
            graphs and relationships.
          </li>
          <li>
            <strong>Pandas</strong>: Data manipulation and analysis.
          </li>
          <li>
            <strong>scikit-learn</strong>: Building and optimizing the
            RandomForestRegressor model.
          </li>
          <li>
            <strong>GraphML</strong>: Handling graph data in a structured
            format.
          </li>
          <li>
            <strong>NumPy</strong>: Efficient numerical operations.
          </li>
        </ul>

        <h3 className="text-left text-xl font-medium mb-2">
          Key Research Focus
        </h3>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <strong>Temporal Predictions</strong>: Predicting corporate
            longevity using ownership, financials, and history.
          </li>
          <li>
            <strong>Foreign Ownership and Influence</strong>: Assessing how
            foreign entities affect corporate structures.
          </li>
          <li>
            <strong>Illegal Activities</strong>: Identifying patterns indicating
            potential unlawful operations.
          </li>
        </ul>

        {/* Model Development */}
        <h3 className="text-left text-xl font-medium mb-2">
          Model Development
        </h3>
        <p className="text-left mb-8 font-light">
          I created the RandomForestRegressor model from scratch and
          continuously refine it. Improvements include feature engineering,
          hyperparameter tuning, and validation with various machine learning
          techniques to ensure higher predictive accuracy and broader utility.
        </p>

        {/* Getting Started */}
        <h3 className="text-left text-xl font-medium mb-2">Getting Started</h3>
        <ol className="list-decimal text-left ml-8 mb-8 font-light">
          <li>Clone the repository.</li>
          <li>
            Install the required Python libraries (Pandas, NetworkX,
            scikit-learn, NumPy, etc.).
          </li>
          <li>Load the dataset and GraphML files into your environment.</li>
          <li>
            Run the provided scripts to execute the model and analyze the
            results.
          </li>
        </ol>

        {/* Contributing */}
        <h3 className="text-left text-xl font-medium mb-2">Contributing</h3>
        <p className="text-left mb-8 font-light">
          This project is a work in progress, and contributions are welcome.
          Whether improving the model, adding new features, or exploring new
          angles of the data, your collaboration can drive its advancement.
        </p>
      </div>
    </div>
  );
}
