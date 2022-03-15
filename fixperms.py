import os

path = "/data/data/com.termux/files/home/website/src"
Files = []

for base, dirs, files in os.walk(path):
    for file in files:
        Files.append(base + "/" + file)
    for dir in dirs:
        Files.append(base + "/" + dir)
		
for file in Files:
	os.system(f"sudo chown u0_a217 {file}")
	os.system(f"sudo chgrp u0_a217 {file}")

print("Fixed")
		
