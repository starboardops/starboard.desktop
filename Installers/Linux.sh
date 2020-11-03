#!/bin/bash

deps="libgtk-3-0 libnotify4 libnss3 libxss1 libxtst6 xdg-utils libatspi2.0-0 libuuid1 libappindicator3-1 libsecret-1-0"

echo "Starboard 1.4.7 - install starting..."
cd /home
mkdir ohsinternal
mkdir starboardinternal

# here is where we do are work. don't delete the folder!
cd starboardinternal
curl https://github.com/starboardbrowser/installersupport/blob/master/starboardstandard_1.4.7_amd64.deb?raw=true --output starboardstandard_1.4.7_amd64.deb
curl https://github.com/starboardbrowser/installersupport/blob/master/starboardstandard_1.4.7_i386.deb?raw=true --output starboardstandard_1.4.7_i386.deb

cd ohsinternal
echo "Installer files have been downloaded."

export DEBIAN_FRONTEND=noninteractive
echo "Installing Dependencies..."
sudo apt install -y $deps
echo "Dependencies have been downloaded."

echo "Installing Starboard..."
sudo dpkg -i starboardforamd.deb

echo "Writing Logs & Finishing Up..."
cd /home
cd ohsinternal
touch InstallerLog.txt
cat "Successfully found all deps and installed." >> InstallerLog.txt
cd 
echo "Starboard has been downloaded. Thank you."
