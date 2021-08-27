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

Our released dataset includes:
* **fNIRS recordings** in [fNIRS_data]();
* **Supplementary data**:
    * **demographic and contextual information** in [pre-experiment]();
    * **Cognitive task performance** in [task_accuracy]();
    * **experiment log** in [log]();
    * **post-experiment interview** in [interview]();
    * **subjective workload** in [nasa-tlx]();

### Data Structure


.
  - qualified_subjects_list.pdf
  - pre-experiment
      - sub_xx.csv
  - experiment
    - log
      - sub_xx.csv
    - task_accuracy
      - sub_xx.csv
    - fNIRS_data
        - raw_data
          - sub_xx.csv
        - no_band_pass_filtered
          - sub_xx.csv
        - band_pass_filtered
          - bpf_whole_data
            - sub_xx.csv
          - bpf_slide_window_data
            - bpf_size_2sec_10ts_stride_3ts
              - sub_xx.csv
            - bpf_size_5sec_25ts_stride_3ts
              - sub_xx.csv
            - bpf_size_10sec_50ts_stride_3ts
              - sub_xx.csv
            - bpf_size_20sec_100ts_stride_3ts
              - sub_xx.csv
            - bpf_size_30sec_150ts_stride_3ts
              - sub_xx.csv
            - bpf_size_40sec_200ts_stride_3ts
              - sub_xx.csv

  
  - post-experiment
      - nasa-tlx
        - sub_xx.csv
      - interview
        - sub_xx.pdf


### Data Format

#### Pre-experiment Data
It includes the non sensitive personal data we collect before the experiment.

#### Experiment Data
All fNIRS data store here, along with the n-back tasks accuracy and experiment log.
1. raw data;
2. band-pass-filtered;
  2.a. bpf_raw_data;
  2.b. bpf_filtered_slide_window_data;

#### Post-experiment Data


#### Supplementary Data
##### Demographic and contextual information
##### Subjective workload
##### Post-experiment interview


## Code

## Paper link and Please Cite
[Paper link](https://openreview.net/forum?id=QzNHE7QHhut)
