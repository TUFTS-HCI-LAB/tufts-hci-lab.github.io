---
title: The Tufts fNIRS to Mental Workload Dataset
display: home
image: /code_and_datasets/fNIRS.png
date: 2019-02-20
tags: 
  - BCI
  - public dataset
  - fNIRS
  - machine learning
categories:
  - 
--- 
Currently, we are waiting for the Tufts IRB to give us permission to release the participants' data. (We are almost there, and we apologize for the inconvenience).

If you want to download the data or have any questions, please reach out to Leon (leonwang_at_cs.tufts.edu).

## Paper Information
Zhe Huang*, Liang Wang*, Giles Blaney, Christopher Slaughter, Devon McKeon, Ziyu Zhou, Alex Olwal, Robert Jacob*, Michael C Hughes*
 “The Tufts fNIRS to Mental Workload Dataset: Toward Brain-Computer Interfaces that Generalize” NeurIPS 2021 Datasets and Benchmarks Track (Round 2)

*Lead authors ZH \& LW contributed equally, as did supervisory authors RJ \& MCH

## Description

Functional near-infrared spectroscopy (fNIRS) promises a non-intrusive way to measure real-time brain activity and build responsive brain-computer interfaces. However, in its first decade of research this technology has not yet realized its potential. A primary barrier to success has been that observed fNIRS signals vary significantly across human users. Building models that generalize well to never-before-seen users has been difficult; a large amount of subject-specific data has been needed to train effective models. To help overcome this barrier, we introduce the largest open-access dataset of its kind, containing multivariate fNIRS recordings from over 60 participants, each with labeled segments indicating four possible mental workload intensity levels. Labels were collected via a controlled setting in which subjects performed standard n-back tasks to induce desired working memory levels. We further define an evaluation protocol which allows future users to report comparable numbers and fairly assess generalization potential while avoiding any overlap or leakage between train and test data. Using this dataset and standardized protocol, we show how deep learning models pre-trained using abundant fNIRS data from other participants can be effectively fine-tuned for new subjects, reaching accuracies similar to data-hungry subject-specific models while using a fraction of the data. We further show how performance improves as the size of the available dataset grows, while also analyzing error rates across key subpopulations to explore equity concerns. We share our open-access dataset and open-source code as a step toward advancing brain computer interfaces that work for many users.


## Code
[Here is the link to our code Github repo](https://github.com/lwang89/code_for_UIST.git)

## Dataset
Public dataset release pending imminent approval from IRB.
<!-- [Here is the link to download the dataset](https://tufts.box.com/s/x7gp7cz2xq4l8a4wluprhuwb5zgce6dg) -->

### Data Description

### Data Structure

### Data Format

#### Pre-experiment
It includes the non sensitive personal data we collect before the experiment.

#### Experiment
All fNIRS data store here, along with the n-back tasks accuracy.

#### Post-experiment 
We put all post experiment interviews here.

## Paper link and Please Cite
[Paper link](https://openreview.net/forum?id=QzNHE7QHhut)
