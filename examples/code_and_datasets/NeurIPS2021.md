---
title: The Tufts fNIRS to Mental Workload Dataset
display: home
image: /code_and_datasets/fNIRS.png
date: 2019-02-20
tags: 
  - BCI
  - Public Dataset
  - fNIRS
  - machine learning
  - time-series classification
  - cognitive workload
categories:
  - 
--- 
Currently, we are waiting for the Tufts IRB to give us permission to release the participants' data. (We are almost there, and we apologize for the inconvenience).

If you want to download the data or have any questions, please reach out to Leon (leonwang_at_cs.tufts.edu).

## Paper Information
Zhe Huang*, Liang Wang*, Giles Blaney, Christopher Slaughter, Devon McKeon, Ziyu Zhou, Alex Olwal, Robert Jacob*, Michael C Hughes*
 “The Tufts fNIRS to Mental Workload Dataset: Toward Brain-Computer Interfaces that Generalize” NeurIPS 2021 Datasets and Benchmarks Track (Round 2)

*Lead authors ZH \& LW contributed equally, as did supervisory authors RJ \& MCH

## Project Description

Functional near-infrared spectroscopy (fNIRS) promises a non-intrusive way to measure real-time brain activity and build responsive brain-computer interfaces. However, in its first decade of research this technology has not yet realized its potential. 

* One common **barrier** to effective fNIRS-based BCIs is **_the lack of available data_**. Previous work typically collects proprietary datasets from only 10-20 subjects.

* Another **barrier** to progress is the lack of a **_standardized evaluation protocol_**. Without standardized protocols, different papers may not follow the very same experimental design, making results incomparable and preventing scientific progress.

* The toughest **barrier** of all to developing an accurate mental workload classifier is **_the high variation in fNIRS data_**, which makes generalizing to a new subject or session challenging.


Our **contributions** are:

* We release a large open-access dataset of [68]() participants. This dataset is the largest known to us by a factor of 2.5. Details are in [Section Dataset]() below.

* We suggest a standardized evaluation practice for assessing method performance on our dataset under three paradigms of training: subject-specific, generic, and generic + fine-tuning. clear instructions and code are provided in [Section Code]() below.






## Dataset
Public dataset release pending imminent approval from IRB.
<!-- [Here is the link to download the dataset](https://tufts.box.com/s/x7gp7cz2xq4l8a4wluprhuwb5zgce6dg) -->

### Data Description
Totally, our large open-access dataset includes **68** participants. Each subject contributes **21.33** minutes of fNIRS recordings from a controlled experimental setting with corresponding labels of workload intensity.
### Data Structure
.<br>
  - qualified_subjects_list.docx 
  - pre-experiment
      - Visual
            - sub_xx.csv
  - experiment
      - Visual
            - sub_xx.csv
  - post-experiment
      - Visual
            - sub_xx.csv

├── pexperiment<br>
|
|
├── pre-experiment<br>
### Data Format

#### Pre-experiment
It includes the non sensitive personal data we collect before the experiment.

#### Experiment Data
All fNIRS data store here, along with the n-back tasks accuracy and experiment log.
1. raw data;
2. band-pass-filtered;
  2.a. bpf_raw_data;
  2.b. bpf_filtered_slide_window_data;

#### Supplementary Data
##### Demographic and contextual information
##### Subjective workload
##### Post-experiment interview


## Code

## Paper link and Please Cite
[Paper link](https://openreview.net/forum?id=QzNHE7QHhut)
