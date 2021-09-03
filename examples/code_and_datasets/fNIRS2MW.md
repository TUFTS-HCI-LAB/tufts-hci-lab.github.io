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

If you have any questions, please reach out to Leon (leonwang_at_cs.tufts.edu).


*****
## Paper Information
_Submitted to NeurIPS 2021 Datasets and Benchmarks Track_

Zhe Huang*, Liang Wang*, Giles Blaney, Christopher Slaughter, Devon McKeon, Ziyu Zhou, Alex Olwal, Robert Jacob*, Michael C Hughes*
 “The Tufts fNIRS to Mental Workload Dataset: Toward Brain-Computer Interfaces that Generalize”

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
[Link to fNIRS2MW dataset](https://tufts.box.com/s/1e0831syu1evlmk9zx2pukpl3i32md6r)


*****
### License

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)


*****
### IRB Approval

Procedures to collect data were approved by [Tufts institution's IRB](https://viceprovost.tufts.edu/about-sber-irb), and our deidentified dataset was approved for public release (STUDY00000959). Each participant gave informed written consent, and was compensated \$20 US.


*****
### COVID-19 Safety Approval
Because collection occurred during the COVID-19 pandemic in early 2021, we also got approval from the Tufts Integrative Safety Committee (ISC). We followed required sanitation and social distancing practices: experimenters used personal protective equipment and disinfected the fNIRS probe for each subject.


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
##### Task introduction

**N-back video introduction**: 

Before experiment started, the system played a short introductory video, showing an example of a user completing n-back tasks, with voice-over and caption explanations.

_Sample scripts for N-back task video are as below:_

>Today you will be completing a series of n-back tasks. You will be presented with many numbers, one after another. Some of these numbers will be targets. A number is a target if it is identical to the one shown n steps previously. 
>
>Here is an example of a 2-back task. In this case, n = 2. The highlighted 8 is a target number, since the number 2 steps back is also 8.
>
>Your job will be to press the left arrow key each time you see one of these target numbers. If the number shown is not a target number, you should press the right arrow key.
*****
>Let’s view an example of a 0-back task. 
>
>At the beginning of each task, you will hear a few beeps which indicate the start of the task.
>
>The current type of n-back task can be found at the top of the task window. In this example, n = 0. For the purposes of this demo only, the stack of numbers already shown is included beneath the task window.
>
>When n = 0, every number is a target, since every number is identical to the number 0 steps back. That is, every number is the same as itself. For 0-back, the participant presses the left arrow key after each number appears, and never presses the right arrow key.
*****
>Now let’s view an example of a 1-back task. 
>
>The participant should press the right arrow key for all non-target numbers. When n = 1, a number is only a target if it is identical to the number 1 step back. Once the participant identifies a target number, they should press the left arrow key instead.
>
>For example, this 4 is a target number because the previous number was also 4. The participant should press the left arrow key, and then continue pressing the right arrow key until they see the next target number.
>
>Here is another target number. The number 1-step back was also 2, so the participant should press the left arrow key.
>
>During today’s experiment, the stack of already shown numbers will not be visible to you. It is your job to remember the numbers that were n-steps back so that you are able to identify the correct target numbers.
*****
>There will be 16 rounds in total. During each round, you will complete an n-bask task, where n is either 0, 1, 2, or 3. 
>
>Before each task, there will be instructions reminding you how to find the target numbers for the current n. During the task, you will be shown 40 numbers. Each time you see a target number, you should press the left arrow key. For all non-target numbers, you should press the right arrow key. 
>
>After each task, you will complete a survey. Once you have completed the survey, you will be able to rest for 20 seconds. 
>
>The experiment will take approximately 40 minutes.
>
>After the entire experiment is finished, you will complete a short interview about your experience.  
>
>Please remain seated and do not talk or adjust the headband while completing the experiment. However, if you do feel uncomfortable at any point, let the operator know and they will stop the experiment.

*****
**Generel introduction**: 
Before each task, the system displayed a graphic depicting how to identify targets for the current n, with voice-over.

_The graphic and sample scripts for 0-back are as below:_

<img src="/code_and_datasets/fNIRS2MW/intro_0_back.png" width="50%" height="30%" />

>This is a 0 back task. Every number is a target number.


*****
_The graphic and sample scripts for 1-back are as below:_

<img src="/code_and_datasets/fNIRS2MW/intro_1_back.png" width="50%" height="30%" />

>This is a 1 back task. A number is a target if it is identical to the previous number.


*****
_The graphic and sample scripts for 2-back are as below:_

<img src="/code_and_datasets/fNIRS2MW/intro_2_back.png" width="50%" height="30%" />

>This is a 2 back task. A number is a target if it is identical to the number 2 steps back.


*****
_The graphic and sample scripts for 3-back are as below:_

<img src="/code_and_datasets/fNIRS2MW/intro_3_back.png" width="50%" height="30%" />

>This is a 3 back task. A number is a target if it is identical to the number 3 steps back.


*****
### Data Structure

Our released dataset includes ([Link to fNIRS2MW dataset](https://tufts.box.com/s/1e0831syu1evlmk9zx2pukpl3i32md6r)):
* **fNIRS measurements** in [fNIRS_data](https://tufts.box.com/s/9jwy67dw2b6emmslutxhmgihk92ivnf2);
* **Supplementary data**:
    * **demographic and contextual information** in [pre-experiment](https://tufts.box.com/s/x2o6hny7kwudg58e1364gdogbvhnwq4f);
    * **Cognitive task performance** in [task_accuracy](https://tufts.box.com/s/gme0gsc6z9vj0v4dhchtqh04b4fpy8tm);
    * **experiment log** in [log](https://tufts.box.com/s/9ruep9b6tpeymda9qrubq64oampfh9br);
    * **post-experiment interview** in [interview](https://tufts.box.com/s/jrn9rvph8xugstuz9ixra1l2mpfqopdh);
    * **subjective workload** in [nasa-tlx](https://tufts.box.com/s/c5y3m59wwwem0j792epjxhnq4uei5swq);


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
#### [fNIRS Data](https://tufts.box.com/s/9jwy67dw2b6emmslutxhmgihk92ivnf2)
`68` participants were recruited, aged `18` to `44` years. `None` of the participants reported neurological, psychiatric, or other brain-related diseases that might affect the result.


*****
##### [raw data](https://tufts.box.com/s/i3cphal98hbj3vixj8ypatihwfyer1ot)

TODO


*****
##### [band pass filtered data](https://tufts.box.com/s/bj0iml74am3wnuittzmjggjemxxgz2cp)

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


###### [whole data](https://tufts.box.com/s/wyvz6utfrd5y5p2js0kj1990dspbnwdn)
Each subject's .csv file includes continuous data of `16` tasks (exclude data during self-evaluation ([nasa-tlx]()) and rest period).

_Screenshot of deidentified data sample is as below:_
![whole data](/code_and_datasets/fNIRS2MW/bpf_whole_data.png)


*****
###### [slide window data](https://tufts.box.com/s/7l8rz3tpos1il637kmhn57mzacdldyv4)

We offer pre processed data in :
* Window size: `10`/`25`/`50`/`100`/`150`/`200` timestamps (`2`/`5`/`10`/`20`/`30`/`40` seconds)
* Window stride: `3` timestamps (rough `0.6` second)

_Screenshot of deidentified data sample is as below:_
![slide window data](/code_and_datasets/fNIRS2MW/bpf_slide_window_data.png)


*****
#### Supplementary Data

To ensure quality and consistency, we used several criteria to identify which subjects' data are suitable for classifier evaluation.


*****
##### [demographic and contextual information](https://tufts.box.com/s/x2o6hny7kwudg58e1364gdogbvhnwq4f)

Demographic and contextual information is recorded before the experiment. 

_Please see details in the data directly_



*****
##### [task_accuracy](https://tufts.box.com/s/gme0gsc6z9vj0v4dhchtqh04b4fpy8tm)

We measured the subject's performance at the n-back task based on the accuracy of the subject's response for each digit.

the accuracy of each n-back task was recorded.

_Please see details in the screenshot of fake data sample as below:_

<img src="/code_and_datasets/fNIRS2MW/task_accuracy.png" width="30%" height="30%" />


*****
##### [nasa-tlx](https://tufts.box.com/s/c5y3m59wwwem0j792epjxhnq4uei5swq)

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
##### [log](https://tufts.box.com/s/9ruep9b6tpeymda9qrubq64oampfh9br)

Hair blocking, light leaking, fNIRS instrument settings and other issues during the experiment were recorded.


*****
##### [interview](https://tufts.box.com/s/jrn9rvph8xugstuz9ixra1l2mpfqopdh)

Post-experiment interviews were converted from audio to text (pdf version) by the operator. 

The original audios were **destroyed** immediately following the IRB protocol.


*****
## [Code](https://github.com/tufts-ml/fNIRS-mental-workload-classifiers)
Please check README in the repo.

