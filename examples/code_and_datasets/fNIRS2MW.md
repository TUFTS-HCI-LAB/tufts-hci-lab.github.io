---
title: The Tufts fNIRS to Mental Workload Dataset
display: home
image: /code_and_datasets/fNIRS2MW/fNIRS.png
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


*****
## Paper Information
Submitted to NeurIPS 2021 Datasets and Benchmarks Track
Zhe Huang*, Liang Wang*, Giles Blaney, Christopher Slaughter, Devon McKeon, Ziyu Zhou, Alex Olwal, Robert Jacob*, Michael C Hughes*
 “The Tufts fNIRS to Mental Workload Dataset: Toward Brain-Computer Interfaces that Generalize”, submitted to NeurIPS 2021 Datasets and Benchmarks Track

*Lead authors ZH \& LW contributed equally, as did supervisory authors RJ \& MCH

[Paper link](https://openreview.net/forum?id=QzNHE7QHhut) 


*****
## Project Description

Functional near-infrared spectroscopy (**fNIRS**) promises a non-intrusive way to measure real-time brain activity and build responsive brain-computer interfaces (**BCIs**). However, in its first decade of research this technology has not yet realized its potential. 

* One common **barrier** to effective fNIRS-based BCIs is **_the lack of available data_**. Previous work typically collects proprietary datasets from only `10`-`20` subjects.

* Another **barrier** to progress is the lack of a **_standardized evaluation protocol_**. Without standardized protocols, different papers may not follow the very same experimental design, making results incomparable and preventing scientific progress.

* The toughest **barrier** of all to developing an accurate mental workload classifier is **_the high variation in fNIRS data_**, which makes generalizing to a new subject or session challenging.

*****
Our **contributions** are:

* We release **_a large open-access dataset_** of `68` participants. This dataset is the largest known to us by a factor of `2.5`. Details are in [Section Dataset]() below.

* We suggest **_a standardized evaluation practice_** for assessing method performance on our dataset under three paradigms of training (clear instructions and code are provided in [Section Code]() below): 
  * subject-specific, 
  * generic, 
  * generic + fine-tuning.


*****
## Dataset

Public dataset release pending imminent approval from IRB.
<!-- [Here is the link to download the dataset](https://tufts.box.com/s/x7gp7cz2xq4l8a4wluprhuwb5zgce6dg) -->


*****
### License

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)


*****
### General Description

Totally, our large open-access dataset includes `68` participants. Each subject contributes `21.33` minutes of fNIRS recordings from a controlled experimental setting with corresponding labels of workload intensity.


***** 
#### Task Description

* Each participant completed `16` blocks of n-back trails (*0→1→2→3→1→2→3→0→2→3→0→1→3→0→1→2*).
* Each block is composed of:
  * `40` trails ( display for `0.5` seconds, hidden for `1.5` seconds).

_Details of task sessions is as below:_ 
![task flowchart](/code_and_datasets/fNIRS2MW/task-flowchart.png)


*****
### Data Structure

Our released dataset includes:
* **fNIRS measurements** in [fNIRS_data]();
* **Supplementary data**:
    * **demographic and contextual information** in [pre-experiment]();
    * **Cognitive task performance** in [task_accuracy]();
    * **experiment log** in [log]();
    * **post-experiment interview** in [interview]();
    * **subjective workload** in [nasa-tlx]();


```
***************************************
** fNIRS2MW dataset folder structure **
***************************************
|- qualified_subjects_list.pdf            
|- pre-experiment                              //
|- experiment                                  //
| |- log                                       //
| |- task_accuracy                             //
| |- fNIRS_data                                //
| | |- raw_data                                //
| | |- band_pass_filtered                      //
| | | |- whole_data                            //
| | | |- slide_window_data                     //
| | | | |- size_02sec_10ts_stride_03ts
| | | | |- size_05sec_25ts_stride_03ts
| | | | |- size_10sec_50ts_stride_03ts
| | | | |- size_20sec_100ts_stride_03ts
| | | | |- size_30sec_50ts_stride_03ts
| | | | |- size_40sec_200ts_stride_03ts
|- post-experiment                             //
| |- nasa-tlx                                  //
| |- interview                                 //
| |- * (all other folders)  
```


*****
### Data Format

We introduce and describe the data format of fNIRS data (raw and pre-processed) and supplementary data as below:


*****
#### fNIRS Data
`68` participants were recruited, aged `18` to `44` years. `None` of the participants reported neurological, psychiatric, or other brain-related diseases that might affect the result.


*****
##### raw data

TODO


*****
##### band pass filtered data

After pre-processing (**Dual-slope** and **band pass filter**), we have **_features_**/**_columns_** as below:
* label: The label for each row.
    * The values shoule be in the set {0, 1, 2, 3}, representing 0-back/1-back/2-back/3-back tasks respectively.
    * It should be the same for all rows in the same chunk.
* chunk (**Only in slide window data**): The chunk number for each chunk.
    * It starts at `0` and increases by `​1` for each chunk.
    * It should be the same for all rows in the same chunk.

* AB_I_O, AB_I_DO: Intensity of oxy & deoxy from detector AB.
* CD_I_O, CD_I_DO: Intensity of oxy & deoxy from detector CD.
* AB_PHI_O, AB_PHI_DO: Phase of oxy & deoxy from detector AB.
* CD_PHI_O, CD_PHI_DO: Phase of oxy & deoxy from detector CD.

![pre process](/code_and_datasets/fNIRS2MW/pre-processing.png)


###### whole data
Each subject's .csv file includes continuous data of `16` tasks (exclude data during self-evaluation ([nasa-tlx]()) and rest period).

_Screenshot of deidentified data sample is as below:_
![whole data](/code_and_datasets/fNIRS2MW/bpf_whole_data.png)


*****
###### slide window data

We offer pre processed data in :
* Window size: `10`/`25`/`50`/`100`/`150`/`200` timestamps (`2`/`5`/`10`/`20`/`30`/`40` seconds)
* Window stride: `3` timestamps (rough `0.6` second)

_Screenshot of deidentified data sample is as below:_
![slide window data](/code_and_datasets/fNIRS2MW/bpf_slide_window_data.png)


*****
#### Supplementary Data

To ensure quality and consistency, we used several criteria to identify which subjects' data are suitable for classifier evaluation.


*****
##### demographic and contextual information

Demographic and contextual information is recorded before the experiment. 

_Please see details in the screenshot of fake data sample as below:_
![pre-experiment](/code_and_datasets/fNIRS2MW/pre-experiment.png)


*****
##### task_accuracy

We measured the subject's performance at the n-back task based on the accuracy of the subject's response for each digit.

the accuracy of each n-back task was recorded.

_Please see details in the screenshot of fake data sample as below:_

<img src="/code_and_datasets/fNIRS2MW/task_accuracy.png" width="30%" height="30%" />


*****
##### nasa-tlx

This is a good way to evaluate the **perceived/subjective** mental workload.

Total `16` "serial_feedback" .csv files for `16` n-back tasks:
* `12` files start with "train_1_1_" (`1`-`12`) match the first `1`-`12` tasks,
* `4` files start with "test_1_2_" (`1`-`4`) match the last `4` tasks. 
* Useful features include:
  * movement: subject report if the headband is moved or not,
  * uncomfortable: subject report if feeling unfortable during the experiment or not,
  * mental: mental workload after the task from low (`0`) to high (`100`)
  * performance: performance after the task from low (`0`) to high (`100`)
  * effort: effort needed for the task from low (`0`) to high (`100`)
  * frustration: frustration felt during the task from low (`0`) to high (`100`)


_Please see details in the screenshot of deidentified data sample as below:_
![nasa-tlx](/code_and_datasets/fNIRS2MW/nasa-tlx.png)


*****
##### log

Hair blocking, light leaking, fNIRS instrument settings and other issues during the experiment were recorded.


*****
##### interview

Post-experiment interviews were converted from audio to text (pdf version) by the operator. 

The original audios were **destroyed** immediately following the IRB protocol.


*****
## Code

