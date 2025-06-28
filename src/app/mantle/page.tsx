import React from "react";

export default function Mantle() {
  return (
    <div className="md:text-center px-6 md:px-20 text-left mb-12 md:mb-24 py-24 lg:py-48">
      <div className="content md:w-2/3 mx-auto mb-8">
        <h1 className="text-left text-3xl font-medium md:text-7xl mb-4">
          <a href="https://github.com/ukhan1219/mantle" className="hoverlink"
            target="_blank"
            rel="noopener noreferrer">
            Mantle{">"}
          </a>
        </h1>
        <p className="text-left mb-8 text-sm font-extralight">
          <strong>Updated:</strong> June 28, 2025
        </p>

        <p className="text-left mb-4 font-light">
          Mantle is an iOS-based chat application that runs powerful Large
          Language Models (LLMs) entirely on-device, leveraging the full
          potential of Apple Silicon. This project is a deep dive into the world
          of on-device AI, focusing on the significant engineering challenges
          involved in making large, complex models performant within the
          constrained environment of a mobile phone.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Demo</h2>
        <p className="text-left mb-4 font-light">
          <a
            href="https://www.youtube.com/watch?v=J20uOGPSQi8"
            className="hoverlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch the demo on YouTube{">"}
          </a>
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Project Purpose</h2>
        <p className="text-left mb-4 font-light">
          The primary goal of this project is to explore and implement advanced
          optimization techniques for running LLMs on iOS devices. It serves as
          a portfolio piece to showcase deep technical expertise in:
        </p>
        <ul className="list-disc text-left ml-8 mb-4 font-light">
          <li>Model Compression & Quantization</li>
          <li>Stateful On-Device Inference</li>
          <li>Performance Profiling & Bottleneck Analysis</li>
          <li>Low-Level GPU Programming with Metal Performance Shaders (MPS)</li>
        </ul>

        <h2 className="text-left text-2xl font-medium mb-2">
          How It Works: The Optimization Journey
        </h2>
        <p className="text-left mb-4 font-light">
          Running a multi-billion parameter LLM on a phone is non-trivial. The
          key is a multi-stage optimization process.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">
          1. Model Conversion & Compression
        </h3>
        <p className="text-left mb-4 font-light">
          The first step is to convert a pre-trained model into Apple&apos;s Core ML
          format. This project uses <code>meta-llama/Llama-3.2-3B</code>. To
          shrink the model, we apply aggressive quantization, converting the
          model&apos;s weights from 16-bit floating-point numbers to smaller types
          like 8-bit integers, which drastically reduces the model&apos;s size and
          memory usage.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">
          2. Stateful Inference & The KV Cache
        </h3>
        <p className="text-left mb-4 font-light">
          To have a conversation, an LLM must remember context, which is managed
          by a Key-Value (KV) Cache. This project implements stateful inference
          where the Core ML model accepts the KV cache as an input state and
          outputs the updated cache after each prediction. This makes generation
          significantly faster.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">
          3. Profiling & Identifying Bottlenecks
        </h3>
        <p className="text-left mb-4 font-light">
          Using Xcode Instruments, we measure latency, memory usage, power
          consumption, and compute unit utilization. This analysis reveals
          performance bottlenecks—typically the Attention mechanism layers, which
          are the computational heart of a Transformer model.
        </p>

        <h3 className="text-left text-xl font-medium mb-2">
          4. Metal Performance Shader (MPS) Optimization
        </h3>
        <p className="text-left mb-4 font-light">
          When profiling shows a layer is a bottleneck, we can replace Core
          ML&apos;s default implementation with our own highly optimized version
          using Metal, Apple&apos;s low-level GPU programming framework. This
          involves writing custom layers in Swift and integrating them using
          Core ML&apos;s <code>MLCustomLayer</code> protocol.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Technology Stack</h2>
        <ul className="list-disc text-left ml-8 mb-4 font-light">
          <li>
            <strong>Model Conversion:</strong> Python, PyTorch, Transformers,
            and <code>coremltools</code>.
          </li>
          <li>
            <strong>iOS Application:</strong> Swift, SwiftUI, CoreML, Metal, and
            Metal Performance Shaders (MPS).
          </li>
          <li>
            <strong>Tooling:</strong> Xcode & Xcode Instruments.
          </li>
        </ul>

        <h2 className="text-left text-2xl font-medium mb-2">How to Replicate</h2>
        <p className="text-left mb-4 font-light">
          The process involves setting up a Python environment, running a
          conversion script with your Hugging Face token, and then integrating
          the resulting <code>.mlpackage</code> model into the Xcode project.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">
          Accomplishments & Learnings
        </h2>
        <p className="text-left mb-4 font-light">
          Successfully deployed a multi-billion parameter LLM on an iPhone using
          a fully stateful inference pipeline. The key learning was the critical
          importance of KV cache management and the trade-offs between model
          size, quantization, and output quality.
        </p>

        <h2 className="text-left text-2xl font-medium mb-2">Future Work</h2>
        <ul className="list-disc text-left ml-8 mb-4 font-light">
          <li>Continue implementing custom Metal layers for the attention mechanism.</li>
          <li>Experiment with more aggressive quantization techniques (e.g., 4-bit).</li>
          <li>Integrate other models to test the flexibility of the pipeline.</li>
          <li>Enhance the chat UI with features like conversation history and context management.</li>
        </ul>
      </div>
    </div>
  );
}
