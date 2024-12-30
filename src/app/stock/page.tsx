// stockbot.tsx

import React from "react";

export default function StockBot() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      <div className="content md:w-1/3 mx-auto mb-8">
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">
          <a href="https://github.com/ukhan1219/stockbot" className="hoverlink">
            StockBot{">"}
          </a>
        </h1>
        <p className="text-left mb-8 text-sm font-extralight">
          <strong>Updated:</strong> May 11, 2024
        </p>

        <p className="text-left text-3xl font-medium md:break-words mb-2">
          A robust, adaptable tool for analyzing and predicting market movements
        </p>
        <p className="text-left md:break-words mb-12 font-light">
          StockBot is a personal project aimed at developing a robust and
          adaptable tool for analyzing and predicting market movements,
          specifically in the futures commodities market. This project leverages
          data from TradingView and yfinance APIs to retrieve real-time and
          historical data for various commodities across multiple time frames.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">
          Project Overview
        </h2>
        <p className="text-left mb-4 font-light">
          As part of my ongoing learning journey, I am exploring and testing
          various machine learning and AI techniques to identify the best
          model(s) for StockBot. My focus includes:
        </p>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <strong>Markov Chain Monte Carlo (MCMC)</strong>: A method for
            sampling from probability distributions based on constructing a
            Markov chain.
          </li>
          <li>
            <strong>Metropolis-Hastings</strong>: A specific MCMC algorithm that
            I am currently learning to implement and fine-tune for predicting
            stock prices.
          </li>
        </ul>
        <p className="text-left mb-4 font-light">
          This codebase is constantly evolving as I experiment with different
          models and sampling techniques to optimize the bot’s performance.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">APIs Used</h3>
        <ul className="list-disc text-left ml-8 mb-8 font-light">
          <li>
            <strong>TradingView API</strong>: Used for real-time data retrieval
            and chart analysis. Essential for tracking current futures
            commodities and powering the webhook scripts.
          </li>
          <li>
            <strong>yfinance API</strong>: Retrieves historical data, ensuring
            the robustness of the model by testing across different time frames.
          </li>
        </ul>

        <h3 className="text-left text-xl font-medium mb-2">
          Webhook Integration
        </h3>
        <p className="text-left mb-8 font-light">
          This project includes two webhook scripts designed to work with a
          sister script on TradingView’s platform. The scripts send alerts for
          buy and sell signals, placing tags directly on the TradingView chart
          for real-time, actionable insights based on StockBot’s data analysis.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">
          Learning and Development
        </h3>
        <p className="text-left mb-12 font-light">
          Please note that StockBot is a work in progress. I am continually
          learning new machine learning models, sampling techniques, and AI
          methodologies. As I refine my approach, expect frequent updates to the
          codebase.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Getting Started</h2>
        <ol className="list-decimal text-left ml-8 mb-8 font-light">
          <li>Clone this repository.</li>
          <li>Set up API keys for TradingView and yfinance.</li>
          <li>
            Run the provided scripts to start data retrieval and analysis.
          </li>
          <li>Monitor output and webhook alerts for buy/sell signals.</li>
        </ol>

        <h2 className="text-left text-2xl font-medium mb-2">Contributing</h2>
        <p className="text-left mb-8 font-light">
          Since this project is part of my learning process, I am open to
          suggestions, ideas, and contributions. Feel free to reach out for
          improvements or if you’d like to collaborate.
        </p>
      </div>
    </div>
  );
}
