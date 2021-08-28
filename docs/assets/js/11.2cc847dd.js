(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{398:function(e,t,a){"use strict";a.r(t);var s=a(2),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Currently, we are waiting for the Tufts IRB to give us permission to release the participants' data. (We are almost there, and we apologize for the inconvenience).")]),e._v(" "),a("p",[e._v("If you want to download the data or have any questions, please reach out to Leon (leonwang_at_cs.tufts.edu).")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"paper-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paper-information"}},[e._v("#")]),e._v(" Paper Information")]),e._v(" "),a("p",[e._v("Submitted to NeurIPS 2021 Datasets and Benchmarks Track\nZhe Huang*, Liang Wang*, Giles Blaney, Christopher Slaughter, Devon McKeon, Ziyu Zhou, Alex Olwal, Robert Jacob*, Michael C Hughes*\n“The Tufts fNIRS to Mental Workload Dataset: Toward Brain-Computer Interfaces that Generalize”, submitted to NeurIPS 2021 Datasets and Benchmarks Track")]),e._v(" "),a("p",[e._v("*Lead authors ZH & LW contributed equally, as did supervisory authors RJ & MCH")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://openreview.net/forum?id=QzNHE7QHhut",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paper link"),a("OutboundLink")],1)]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"project-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-description"}},[e._v("#")]),e._v(" Project Description")]),e._v(" "),a("p",[e._v("Functional near-infrared spectroscopy ("),a("strong",[e._v("fNIRS")]),e._v(") promises a non-intrusive way to measure real-time brain activity and build responsive brain-computer interfaces ("),a("strong",[e._v("BCIs")]),e._v("). However, in its first decade of research this technology has not yet realized its potential.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("One common "),a("strong",[e._v("barrier")]),e._v(" to effective fNIRS-based BCIs is "),a("strong",[a("em",[e._v("the lack of available data")])]),e._v(". Previous work typically collects proprietary datasets from only "),a("code",[e._v("10")]),e._v("-"),a("code",[e._v("20")]),e._v(" subjects.")])]),e._v(" "),a("li",[a("p",[e._v("Another "),a("strong",[e._v("barrier")]),e._v(" to progress is the lack of a "),a("strong",[a("em",[e._v("standardized evaluation protocol")])]),e._v(". Without standardized protocols, different papers may not follow the very same experimental design, making results incomparable and preventing scientific progress.")])]),e._v(" "),a("li",[a("p",[e._v("The toughest "),a("strong",[e._v("barrier")]),e._v(" of all to developing an accurate mental workload classifier is "),a("strong",[a("em",[e._v("the high variation in fNIRS data")])]),e._v(", which makes generalizing to a new subject or session challenging.")])])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Our "),a("strong",[e._v("contributions")]),e._v(" are:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("We release "),a("strong",[a("em",[e._v("a large open-access dataset")])]),e._v(" of "),a("code",[e._v("68")]),e._v(" participants. This dataset is the largest known to us by a factor of "),a("code",[e._v("2.5")]),e._v(". Details are in "),a("a",{attrs:{href:""}},[e._v("Section Dataset")]),e._v(" below.")])]),e._v(" "),a("li",[a("p",[e._v("We suggest "),a("strong",[a("em",[e._v("a standardized evaluation practice")])]),e._v(" for assessing method performance on our dataset under three paradigms of training (clear instructions and code are provided in "),a("a",{attrs:{href:""}},[e._v("Section Code")]),e._v(" below):")]),e._v(" "),a("ul",[a("li",[e._v("subject-specific,")]),e._v(" "),a("li",[e._v("generic,")]),e._v(" "),a("li",[e._v("generic + fine-tuning.")])])])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset"}},[e._v("#")]),e._v(" Dataset")]),e._v(" "),a("p",[e._v("Public dataset release pending imminent approval from IRB.\n")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC-BY-4.0"),a("OutboundLink")],1)]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"general-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-description"}},[e._v("#")]),e._v(" General Description")]),e._v(" "),a("p",[e._v("Totally, our large open-access dataset includes "),a("code",[e._v("68")]),e._v(" participants. Each subject contributes "),a("code",[e._v("21.33")]),e._v(" minutes of fNIRS recordings from a controlled experimental setting with corresponding labels of workload intensity.")]),e._v(" "),a("hr"),e._v(" "),a("h4",{attrs:{id:"task-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task-description"}},[e._v("#")]),e._v(" Task Description")]),e._v(" "),a("ul",[a("li",[e._v("Each participant completed "),a("code",[e._v("16")]),e._v(" blocks of n-back trails ("),a("em",[e._v("0→1→2→3→1→2→3→0→2→3→0→1→3→0→1→2")]),e._v(").")]),e._v(" "),a("li",[e._v("Each block is composed of:\n"),a("ul",[a("li",[a("code",[e._v("40")]),e._v(" trails ( display for "),a("code",[e._v("0.5")]),e._v(" seconds, hidden for "),a("code",[e._v("1.5")]),e._v(" seconds).")])])])]),e._v(" "),a("p",[a("em",[e._v("Details of task sessions is as below:")]),e._v(" "),a("img",{staticClass:"lazy",attrs:{alt:"task flowchart","data-src":"/code_and_datasets/fNIRS2MW/task-flowchart.png",loading:"lazy"}})]),e._v(" "),a("hr"),e._v(" "),a("h5",{attrs:{id:"task-introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task-introduction"}},[e._v("#")]),e._v(" Task introduction")]),e._v(" "),a("p",[a("strong",[e._v("N-back video introduction")]),e._v(":")]),e._v(" "),a("p",[e._v("Before experiment started, the system played a short introductory video, showing an example of a user completing n-back tasks, with voice-over and caption explanations.")]),e._v(" "),a("p",[a("em",[e._v("Sample scripts for N-back task video are as below:")])]),e._v(" "),a("blockquote",[a("p",[e._v("Today you will be completing a series of n-back tasks. You will be presented with many numbers, one after another. Some of these numbers will be targets. A number is a target if it is identical to the one shown n steps previously.")]),e._v(" "),a("p",[e._v("Here is an example of a 2-back task. In this case, n = 2. The highlighted 8 is a target number, since the number 2 steps back is also 8.")]),e._v(" "),a("p",[e._v("Your job will be to press the left arrow key each time you see one of these target numbers. If the number shown is not a target number, you should press the right arrow key.")])]),e._v(" "),a("hr"),e._v(" "),a("blockquote",[a("p",[e._v("Let’s view an example of a 0-back task.")]),e._v(" "),a("p",[e._v("At the beginning of each task, you will hear a few beeps which indicate the start of the task.")]),e._v(" "),a("p",[e._v("The current type of n-back task can be found at the top of the task window. In this example, n = 0. For the purposes of this demo only, the stack of numbers already shown is included beneath the task window.")]),e._v(" "),a("p",[e._v("When n = 0, every number is a target, since every number is identical to the number 0 steps back. That is, every number is the same as itself. For 0-back, the participant presses the left arrow key after each number appears, and never presses the right arrow key.")])]),e._v(" "),a("hr"),e._v(" "),a("blockquote",[a("p",[e._v("Now let’s view an example of a 1-back task.")]),e._v(" "),a("p",[e._v("The participant should press the right arrow key for all non-target numbers. When n = 1, a number is only a target if it is identical to the number 1 step back. Once the participant identifies a target number, they should press the left arrow key instead.")]),e._v(" "),a("p",[e._v("For example, this 4 is a target number because the previous number was also 4. The participant should press the left arrow key, and then continue pressing the right arrow key until they see the next target number.")]),e._v(" "),a("p",[e._v("Here is another target number. The number 1-step back was also 2, so the participant should press the left arrow key.")]),e._v(" "),a("p",[e._v("During today’s experiment, the stack of already shown numbers will not be visible to you. It is your job to remember the numbers that were n-steps back so that you are able to identify the correct target numbers.")])]),e._v(" "),a("hr"),e._v(" "),a("blockquote",[a("p",[e._v("There will be 16 rounds in total. During each round, you will complete an n-bask task, where n is either 0, 1, 2, or 3.")]),e._v(" "),a("p",[e._v("Before each task, there will be instructions reminding you how to find the target numbers for the current n. During the task, you will be shown 40 numbers. Each time you see a target number, you should press the left arrow key. For all non-target numbers, you should press the right arrow key.")]),e._v(" "),a("p",[e._v("After each task, you will complete a survey. Once you have completed the survey, you will be able to rest for 20 seconds.")]),e._v(" "),a("p",[e._v("The experiment will take approximately 40 minutes.")]),e._v(" "),a("p",[e._v("After the entire experiment is finished, you will complete a short interview about your experience.")]),e._v(" "),a("p",[e._v("Please remain seated and do not talk or adjust the headband while completing the experiment. However, if you do feel uncomfortable at any point, let the operator know and they will stop the experiment.")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("strong",[e._v("Generel introduction")]),e._v(":")]),e._v(" "),a("p",[e._v("Before each task, the system displayed a graphic depicting how to identify targets for the current n, with voice-over.")]),e._v(" "),a("p",[a("em",[e._v("The graphic and sample scripts for 0-back are as below:")])]),e._v(" "),a("img",{attrs:{src:"/code_and_datasets/fNIRS2MW/intro_0_back.png",width:"50%",height:"30%"}}),e._v(" "),a("blockquote",[a("p",[e._v("This is a 0 back task. Every number is a target number.")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("em",[e._v("The graphic and sample scripts for 1-back are as below:")])]),e._v(" "),a("img",{attrs:{src:"/code_and_datasets/fNIRS2MW/intro_1_back.png",width:"50%",height:"30%"}}),e._v(" "),a("blockquote",[a("p",[e._v("This is a 1 back task. A number is a target if it is identical to the previous number.")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("em",[e._v("The graphic and sample scripts for 2-back are as below:")])]),e._v(" "),a("img",{attrs:{src:"/code_and_datasets/fNIRS2MW/intro_2_back.png",width:"50%",height:"30%"}}),e._v(" "),a("blockquote",[a("p",[e._v("This is a 2 back task. A number is a target if it is identical to the number 2 steps back.")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("em",[e._v("The graphic and sample scripts for 3-back are as below:")])]),e._v(" "),a("img",{attrs:{src:"/code_and_datasets/fNIRS2MW/intro_3_back.png",width:"50%",height:"30%"}}),e._v(" "),a("blockquote",[a("p",[e._v("This is a 3 back task. A number is a target if it is identical to the number 3 steps back.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"data-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[e._v("#")]),e._v(" Data Structure")]),e._v(" "),a("p",[e._v("Our released dataset includes:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("fNIRS measurements")]),e._v(" in "),a("a",{attrs:{href:""}},[e._v("fNIRS_data")]),e._v(";")]),e._v(" "),a("li",[a("strong",[e._v("Supplementary data")]),e._v(":\n"),a("ul",[a("li",[a("strong",[e._v("demographic and contextual information")]),e._v(" in "),a("a",{attrs:{href:""}},[e._v("pre-experiment")]),e._v(";")]),e._v(" "),a("li",[a("strong",[e._v("Cognitive task performance")]),e._v(" in "),a("a",{attrs:{href:""}},[e._v("task_accuracy")]),e._v(";")]),e._v(" "),a("li",[a("strong",[e._v("experiment log")]),e._v(" in "),a("a",{attrs:{href:""}},[e._v("log")]),e._v(";")]),e._v(" "),a("li",[a("strong",[e._v("post-experiment interview")]),e._v(" in "),a("a",{attrs:{href:""}},[e._v("interview")]),e._v(";")]),e._v(" "),a("li",[a("strong",[e._v("subjective workload")]),e._v(" in "),a("a",{attrs:{href:""}},[e._v("nasa-tlx")]),e._v(";")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("***************************************\n** fNIRS2MW dataset folder structure **\n***************************************\n|- qualified_subjects_list.pdf            \n|- pre-experiment                              //\n|- experiment                                  //\n| |- log                                       //\n| |- task_accuracy                             //\n| |- fNIRS_data                                //\n| | |- raw_data                                //\n| | |- band_pass_filtered                      //\n| | | |- whole_data                            //\n| | | |- slide_window_data                     //\n| | | | |- size_02sec_10ts_stride_03ts\n| | | | |- size_05sec_25ts_stride_03ts\n| | | | |- size_10sec_50ts_stride_03ts\n| | | | |- size_20sec_100ts_stride_03ts\n| | | | |- size_30sec_50ts_stride_03ts\n| | | | |- size_40sec_200ts_stride_03ts\n|- post-experiment                             //\n| |- nasa-tlx                                  //\n| |- interview                                 //\n| |- * (all other folders)  \n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"data-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-format"}},[e._v("#")]),e._v(" Data Format")]),e._v(" "),a("p",[e._v("We introduce and describe the data format of fNIRS data (raw and pre-processed) and supplementary data as below:")]),e._v(" "),a("hr"),e._v(" "),a("h4",{attrs:{id:"fnirs-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fnirs-data"}},[e._v("#")]),e._v(" fNIRS Data")]),e._v(" "),a("p",[a("code",[e._v("68")]),e._v(" participants were recruited, aged "),a("code",[e._v("18")]),e._v(" to "),a("code",[e._v("44")]),e._v(" years. "),a("code",[e._v("None")]),e._v(" of the participants reported neurological, psychiatric, or other brain-related diseases that might affect the result.")]),e._v(" "),a("hr"),e._v(" "),a("h5",{attrs:{id:"raw-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raw-data"}},[e._v("#")]),e._v(" raw data")]),e._v(" "),a("p",[e._v("TODO")]),e._v(" "),a("hr"),e._v(" "),a("h5",{attrs:{id:"band-pass-filtered-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#band-pass-filtered-data"}},[e._v("#")]),e._v(" band pass filtered data")]),e._v(" "),a("p",[e._v("After pre-processing ("),a("strong",[e._v("Dual-slope")]),e._v(" and "),a("strong",[e._v("band pass filter")]),e._v("), we have "),a("strong",[a("em",[e._v("features")])]),e._v("/"),a("strong",[a("em",[e._v("columns")])]),e._v(" as below:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("label: The label for each row.")]),e._v(" "),a("ul",[a("li",[e._v("The values shoule be in the set {0, 1, 2, 3}, representing 0-back/1-back/2-back/3-back tasks respectively.")]),e._v(" "),a("li",[e._v("It should be the same for all rows in the same chunk.")])])]),e._v(" "),a("li",[a("p",[e._v("chunk ("),a("strong",[e._v("Only in slide window data")]),e._v("): The chunk number for each chunk.")]),e._v(" "),a("ul",[a("li",[e._v("It starts at "),a("code",[e._v("0")]),e._v(" and increases by "),a("code",[e._v("​1")]),e._v(" for each chunk.")]),e._v(" "),a("li",[e._v("It should be the same for all rows in the same chunk.")])])]),e._v(" "),a("li",[a("p",[e._v("AB_I_O, AB_I_DO: Intensity of oxy & deoxy from detector AB.")])]),e._v(" "),a("li",[a("p",[e._v("CD_I_O, CD_I_DO: Intensity of oxy & deoxy from detector CD.")])]),e._v(" "),a("li",[a("p",[e._v("AB_PHI_O, AB_PHI_DO: Phase of oxy & deoxy from detector AB.")])]),e._v(" "),a("li",[a("p",[e._v("CD_PHI_O, CD_PHI_DO: Phase of oxy & deoxy from detector CD.")])])]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"pre process","data-src":"/code_and_datasets/fNIRS2MW/pre-processing.png",loading:"lazy"}})]),e._v(" "),a("h6",{attrs:{id:"whole-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whole-data"}},[e._v("#")]),e._v(" whole data")]),e._v(" "),a("p",[e._v("Each subject's .csv file includes continuous data of "),a("code",[e._v("16")]),e._v(" tasks (exclude data during self-evaluation ("),a("a",{attrs:{href:""}},[e._v("nasa-tlx")]),e._v(") and rest period).")]),e._v(" "),a("p",[a("em",[e._v("Screenshot of deidentified data sample is as below:")]),e._v(" "),a("img",{staticClass:"lazy",attrs:{alt:"whole data","data-src":"/code_and_datasets/fNIRS2MW/bpf_whole_data.png",loading:"lazy"}})]),e._v(" "),a("hr"),e._v(" "),a("h6",{attrs:{id:"slide-window-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slide-window-data"}},[e._v("#")]),e._v(" slide window data")]),e._v(" "),a("p",[e._v("We offer pre processed data in :")]),e._v(" "),a("ul",[a("li",[e._v("Window size: "),a("code",[e._v("10")]),e._v("/"),a("code",[e._v("25")]),e._v("/"),a("code",[e._v("50")]),e._v("/"),a("code",[e._v("100")]),e._v("/"),a("code",[e._v("150")]),e._v("/"),a("code",[e._v("200")]),e._v(" timestamps ("),a("code",[e._v("2")]),e._v("/"),a("code",[e._v("5")]),e._v("/"),a("code",[e._v("10")]),e._v("/"),a("code",[e._v("20")]),e._v("/"),a("code",[e._v("30")]),e._v("/"),a("code",[e._v("40")]),e._v(" seconds)")]),e._v(" "),a("li",[e._v("Window stride: "),a("code",[e._v("3")]),e._v(" timestamps (rough "),a("code",[e._v("0.6")]),e._v(" second)")])]),e._v(" "),a("p",[a("em",[e._v("Screenshot of deidentified data sample is as below:")]),e._v(" "),a("img",{staticClass:"lazy",attrs:{alt:"slide window data","data-src":"/code_and_datasets/fNIRS2MW/bpf_slide_window_data.png",loading:"lazy"}})]),e._v(" "),a("hr"),e._v(" "),a("h4",{attrs:{id:"supplementary-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supplementary-data"}},[e._v("#")]),e._v(" Supplementary Data")]),e._v(" "),a("p",[e._v("To ensure quality and consistency, we used several criteria to identify which subjects' data are suitable for classifier evaluation.")]),e._v(" "),a("hr"),e._v(" "),a("h5",{attrs:{id:"demographic-and-contextual-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demographic-and-contextual-information"}},[e._v("#")]),e._v(" demographic and contextual information")]),e._v(" "),a("p",[e._v("Demographic and contextual information is recorded before the experiment.")]),e._v(" "),a("p",[a("em",[e._v("Please see details in the screenshot of fake data sample as below:")]),e._v(" "),a("img",{staticClass:"lazy",attrs:{alt:"pre-experiment","data-src":"/code_and_datasets/fNIRS2MW/pre-experiment.png",loading:"lazy"}})]),e._v(" "),a("hr"),e._v(" "),a("h5",{attrs:{id:"task-accuracy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task-accuracy"}},[e._v("#")]),e._v(" task_accuracy")]),e._v(" "),a("p",[e._v("We measured the subject's performance at the n-back task based on the accuracy of the subject's response for each digit.")]),e._v(" "),a("p",[e._v("the accuracy of each n-back task was recorded.")]),e._v(" "),a("p",[a("em",[e._v("Please see details in the screenshot of fake data sample as below:")])]),e._v(" "),a("img",{attrs:{src:"/code_and_datasets/fNIRS2MW/task_accuracy.png",width:"30%",height:"30%"}}),e._v(" "),a("hr"),e._v(" "),a("h5",{attrs:{id:"nasa-tlx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nasa-tlx"}},[e._v("#")]),e._v(" nasa-tlx")]),e._v(" "),a("p",[e._v("This is a good way to evaluate the "),a("strong",[e._v("perceived/subjective")]),e._v(" mental workload.")]),e._v(" "),a("p",[e._v("Total "),a("code",[e._v("16")]),e._v(' "serial_feedback" .csv files for '),a("code",[e._v("16")]),e._v(" n-back tasks:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("12")]),e._v(' files start with "train_1_1_" ('),a("code",[e._v("1")]),e._v("-"),a("code",[e._v("12")]),e._v(") match the first "),a("code",[e._v("1")]),e._v("-"),a("code",[e._v("12")]),e._v(" tasks,")]),e._v(" "),a("li",[a("code",[e._v("4")]),e._v(' files start with "test_1_2_" ('),a("code",[e._v("1")]),e._v("-"),a("code",[e._v("4")]),e._v(") match the last "),a("code",[e._v("4")]),e._v(" tasks.")]),e._v(" "),a("li",[e._v("Useful features include:\n"),a("ul",[a("li",[e._v("movement: subject report if the headband is moved or not,")]),e._v(" "),a("li",[e._v("uncomfortable: subject report if feeling unfortable during the experiment or not,")]),e._v(" "),a("li",[e._v("mental: mental workload after the task from low ("),a("code",[e._v("0")]),e._v(") to high ("),a("code",[e._v("100")]),e._v(")")]),e._v(" "),a("li",[e._v("performance: performance after the task from low ("),a("code",[e._v("0")]),e._v(") to high ("),a("code",[e._v("100")]),e._v(")")]),e._v(" "),a("li",[e._v("effort: effort needed for the task from low ("),a("code",[e._v("0")]),e._v(") to high ("),a("code",[e._v("100")]),e._v(")")]),e._v(" "),a("li",[e._v("frustration: frustration felt during the task from low ("),a("code",[e._v("0")]),e._v(") to high ("),a("code",[e._v("100")]),e._v(")")])])])]),e._v(" "),a("p",[a("em",[e._v("Please see details in the screenshot of deidentified data sample as below:")]),e._v(" "),a("img",{staticClass:"lazy",attrs:{alt:"nasa-tlx","data-src":"/code_and_datasets/fNIRS2MW/nasa-tlx.png",loading:"lazy"}})]),e._v(" "),a("hr"),e._v(" "),a("h5",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[e._v("#")]),e._v(" log")]),e._v(" "),a("p",[e._v("Hair blocking, light leaking, fNIRS instrument settings and other issues during the experiment were recorded.")]),e._v(" "),a("hr"),e._v(" "),a("h5",{attrs:{id:"interview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interview"}},[e._v("#")]),e._v(" interview")]),e._v(" "),a("p",[e._v("Post-experiment interviews were converted from audio to text (pdf version) by the operator.")]),e._v(" "),a("p",[e._v("The original audios were "),a("strong",[e._v("destroyed")]),e._v(" immediately following the IRB protocol.")]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[e._v("#")]),e._v(" Code")])])}),[],!1,null,null,null);t.default=r.exports}}]);