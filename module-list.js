(function(){
    var modules={
        "panel-main-ssdci":    	            {url:"$H/p/panel-main.html",router:1},
        "panel-main-spardac-del":    	        {url:"$H/p/panel-main-del.html",router:1},
        "panel-main-spardac-mod":    	        {url:"$H/p/panel-main-mod.html",router:1},
        "panel-child-ssdci-del":                {url:"$H/p/panel-child-del.html"},
        "panel-child-ssdci-mod":                {url:"$H/p/panel-child-mod.html"},
        "panel-child-ssdci":                {url:"$H/p/panel-child.html"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"ssdci-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-ssdci",
                                                questionnaire_setup:"online-questionnaire-setup-ssdci",
                                                online_questionnaire:"online-questionnaire-app-ssdci",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                            },
        "participant-data-del":   		        {url:"$H/m/participant/participant-data.html",Table:"ssdci-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-ssdci-del",
                                                questionnaire_setup:"online-questionnaire-setup-ssdci",
                                                online_questionnaire:"online-questionnaire-app-ssdci",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                            },
        "participant-data-mod":   		        {url:"$H/m/participant/participant-data.html",Table:"ssdci-participant",form_module:"participant-form",router:1,
                                                child_panel:"panel-child-ssdci-mod",
                                                questionnaire_setup:"online-questionnaire-setup-ssdci",
                                                online_questionnaire:"online-questionnaire-app-ssdci",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"ssdci-participant"},

        "online-questionnaire-setup-ssdci": {url:"$H/online-questionnaire/m/setup.html",Table:"ssdci-participant"},
        "online-questionnaire-app-ssdci":   {url:"$H/online-questionnaire/index.html"},

        "notes":  		  	  			    {url:"$H/m/notes.html"},
        "notes-data":  	                    {url:"$H/m/notes-data.html",Table:"ssdci-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/notes-form.html",Table:"ssdci-notes"},

        "ssdci-date-data":		            {url:"$H/m/date-data.html",Table:"ssdci-date",form_module:"ssdci-date-form",task_name:"Visit Date"},
        "ssdci-date-form":		            {url:"$H/m/date-form.html",Table:"ssdci-date"},
        "ssdci-anthropometry-data":		    {url:"$H/m/anthropometry-data.html",Table:"ssdci-anthropometry",form_module:"ssdci-anthropometry-form",task_name:"Anthropometry"},
        "ssdci-anthropometry-form":		    {url:"$H/m/anthropometry-form.html",Table:"ssdci-anthropometry"},
        "ssdci-ethnicity-data":		        {url:"$H/m/ethnicity-data.html",Table:"ssdci-ethnicity",form_module:"ssdci-ethnicity-form",task_name:"Ethnicity"},
        "ssdci-ethnicity-form":		        {url:"$H/m/ethnicity-form.html",Table:"ssdci-ethnicity",task_name:"Ethnicity"},
        "ssdci-lifestyle-data":		        {url:"$H/m/lifestyle-data.html",Table:"ssdci-lifestyle",form_module:"ssdci-lifestyle-form",task_name:"Lifestyle"},
        "ssdci-lifestyle-form":		        {url:"$H/m/lifestyle-form.html",Table:"ssdci-lifestyle",task_name:"Lifestyle"},
        "ssdci-education-data":		        {url:"$H/m/education-data.html",Table:"ssdci-education",form_module:"ssdci-education-form",task_name:"Education"},
        "ssdci-education-form":		        {url:"$H/m/education-form.html",Table:"ssdci-education",task_name:"Education"},
        "ssdci-medical-history-data":		{url:"$H/m/medical-history-data.html",Table:"ssdci-medical-history",form_module:"ssdci-medical-history-form",task_name:"Medical History"},
        "ssdci-medical-history-form":		{url:"$H/m/medical-history-form.html",Table:"ssdci-medical-history",task_name:"Medical History"},
        "ssdci-ess-data":		            {url:"$H/m/ess-data.html",Table:"ssdci-ess",form_module:"ssdci-ess-form",task_name:"Epworth Sleepiness Scale"},
        "ssdci-ess-form":		            {url:"$H/m/ess-form.html",Table:"ssdci-ess",task_name:"Epworth Sleepiness Scale"},
        "ssdci-isi-data":		            {url:"$H/m/isi-data.html",Table:"ssdci-isi",form_module:"ssdci-isi-form",task_name:"Insomnia Severity Index (ISI)"},
        "ssdci-isi-form":		            {url:"$H/m/isi-form.html",Table:"ssdci-isi",task_name:"Insomnia Severity Index (ISI)"},
        "ssdci-psqi-data":		            {url:"$H/m/psqi-data.html",Table:"ssdci-psqi",form_module:"ssdci-psqi-form",task_name:"Pittsburgh Sleep Quality Index (PSQI)"},
        "ssdci-psqi-form":		            {url:"$H/m/psqi-form.html",Table:"ssdci-psqi",task_name:"Pittsburgh Sleep Quality Index (PSQI)"},
        "ssdci-stop-bang-data":		        {url:"$H/m/stop-bang-data.html",Table:"ssdci-stop-bang",form_module:"ssdci-stop-bang-form",task_name:"Stop-Bang"},
        "ssdci-stop-bang-form":		        {url:"$H/m/stop-bang-form.html",Table:"ssdci-stop-bang",task_name:"Stop-BANG"},
        "ssdci-fosq-data":		            {url:"$H/m/fosq-data.html",Table:"ssdci-fosq",form_module:"ssdci-fosq-form",task_name:"Functional Outcomes of Sleep Disorders Questionnaire (FOSQ-10)"},
        "ssdci-fosq-form":		            {url:"$H/m/fosq-form.html",Table:"ssdci-fosq",task_name:"Functional Outcomes of Sleep Disorders Questionnaire (FOSQ-10)"},
        "ssdci-gds-data":		            {url:"$H/m/gds-data.html",Table:"ssdci-gds",form_module:"ssdci-gds-form",task_name:"Geriatric Depression Scale"},
        "ssdci-gds-form":		            {url:"$H/m/gds-form.html",Table:"ssdci-gds",task_name:"Geriatric Depression Scale"},
        "ssdci-hads-data":		            {url:"$H/m/hads-data.html",Table:"ssdci-hads",form_module:"ssdci-hads-form",task_name:"Hospital Anxiety and Depression Questionnaire (HADS)"},
        "ssdci-hads-form":		            {url:"$H/m/hads-form.html",Table:"ssdci-hads",task_name:"Hospital Anxiety and Depression Questionnaire (HADS)"},
        "ssdci-ispq-data":		            {url:"$H/m/ispq-data.html",Table:"ssdci-ispq",form_module:"ssdci-ispq-form",task_name:"Impact to Sleep and Preferences Questionnaire"},
        "ssdci-ispq-form":		            {url:"$H/m/ispq-form.html",Table:"ssdci-ispq",task_name:"Impact to Sleep and Preferences Questionnaire"},
        
        "ssdci-file-notes-data":		    {url:"$H/m/file-notes-data.html",Table:"ssdci-file-notes",form_module:"ssdci-file-notes-form",task_name:"File Notes"},
        "ssdci-file-notes-form":		    {url:"$H/m/file-notes-form.html",Table:"ssdci-file-notes"},
        "ssdci-concom-medication-data":		{url:"$H/m/concom-medication-data.html",Table:"ssdci-concom-medication",form_module:"ssdci-concom-medication-form",task_name:"Concomitant Medication Form"},
        "ssdci-concom-medication-form":		{url:"$H/m/concom-medication-form.html",Table:"ssdci-concom-medication"},

        "ssdci-neurocog-data":		        {url:"$H/m/neurocog-data.html",Table:"ssdci-neurocog",form_module:"ssdci-neurocog-form",task_name:"Neuro Cognetive Battery Scores"},
        "ssdci-neurocog-form":		        {url:"$H/m/neurocog-form.html",Table:"ssdci-neurocog"},
        "ssdci-moca-data":		            {url:"$H/m/moca-data.html",Table:"ssdci-moca",form_module:"ssdci-moca-form",task_name:"Montreal Cognitive Assessment (MoCA)"},
        "ssdci-moca-form":		            {url:"$H/m/moca-form.html",Table:"ssdci-moca"},
        "ssdci-stroop-data":		        {url:"$H/m/stroop-data.html",Table:"ssdci-stroop",form_module:"ssdci-stroop-form",task_name:"Stroop Colour and Text Test"},
        "ssdci-stroop-form":		        {url:"$H/m/stroop-form.html",Table:"ssdci-stroop"},
        "ssdci-tmt-data":		            {url:"$H/m/tmt-data.html",Table:"ssdci-tmt",form_module:"ssdci-tmt-form",task_name:"Trail Making Test"},
        "ssdci-tmt-form":		            {url:"$H/m/tmt-form.html",Table:"ssdci-tmt"},
        "ssdci-ravlt-data":		            {url:"$H/m/ravlt-data.html",Table:"ssdci-ravlt",form_module:"ssdci-ravlt-form",task_name:"Rey Auditory Verbal Learning Test (RAVLT)"},
        "ssdci-ravlt-form":		            {url:"$H/m/ravlt-form.html",Table:"ssdci-ravlt"},
        "ssdci-psg300-data":		        {url:"$H/m/psg300-data.html",Table:"ssdci-psg300",form_module:"ssdci-psg300-form",task_name:"PSG Research Report"},
        "ssdci-psg300-form":		        {url:"$H/m/psg300-form.html",Table:"ssdci-psg300"},
        "ssdci-actigraphy-data":		    {url:"$H/m/actigraphy-data.html",Table:"ssdci-actigraphy",form_module:"ssdci-actigraphy-form",task_name:"Actigraphy"},
        "ssdci-actigraphy-form":		    {url:"$H/m/actigraphy-form.html",Table:"ssdci-actigraphy"},

        "ssdci-earlysense-data":		    {url:"$H/m/earlysense-data.html",Table:"ssdci-earlysense",form_module:"ssdci-earlysense-form",task_name:"EarlySense"},
        "ssdci-earlysense-form":		    {url:"$H/m/earlysense-form.html",Table:"ssdci-earlysense"},
        "ssdci-wristox-data":		        {url:"$H/m/wristox-data.html",Table:"ssdci-wristox",form_module:"ssdci-wristox-form",task_name:"WristOx"},
        "ssdci-wristox-form":		        {url:"$H/m/wristox-form.html",Table:"ssdci-wristox"},
   }
   for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
})();
