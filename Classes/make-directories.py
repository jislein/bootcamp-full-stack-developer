import os

august_days = ["05.Mon", "07.Wed", "09.Fri", "12.Mon", "14.Wed", "16.Fri", "19.Mon", "21.Wed", "23.Fri", "26.Mon", "28.Wed", "30.Fri"]
september_days = ["02.Mon", "04.Wed", "06.Fri", "09.Mon", "11.Wed", "13.Fri", "16.Mon", "18.Wed", "20.Fri", "23.Mon", "25.Wed", "27.Fri", "30.Mon"]
october_days = ["02.Wed", "04.Fri", "07.Mon", "09.Wed", "11.Fri", "14.Mon", "16.Wed", "18.Fri", "21.Mon", "23.Wed", "25.Fri"]

file_name = "notes.md"
file_content = ["# Title\n", "Today's class was about...\n", "## Tarea?\n", "Today's homework is...\n"]

august_dir_name = "2024.08.August"
os.makedirs(august_dir_name)
september_dir_name = "2024.09.Sptember"
os.makedirs(september_dir_name)
october_dir_name = "2024.10.October"
os.makedirs(october_dir_name)
for i in range(len(august_days)):    
    dir_path = august_dir_name + "/" + august_days[i]
    os.makedirs(dir_path)
    with open(os.path.join(dir_path, file_name), 'w') as fp:
        pass
    edit_file = open(dir_path+"/"+file_name, "w+")
    edit_file.writelines(file_content)
    edit_file.close()

for i in range(len(september_days)):
    dir_path = september_dir_name + "/" + september_days[i]
    os.makedirs(dir_path)
    with open(os.path.join(dir_path, file_name), 'w') as fp:
        pass
    edit_file = open(dir_path+"/"+file_name, "w+")
    edit_file.writelines(file_content)
    edit_file.close()

for i in range(len(october_days)):
    dir_path = october_dir_name + "/" + october_days[i]
    os.makedirs(dir_path)
    with open(os.path.join(dir_path, file_name), 'w') as fp:
        pass
    edit_file = open(dir_path+"/"+file_name, "w+")
    edit_file.writelines(file_content)
    edit_file.close()