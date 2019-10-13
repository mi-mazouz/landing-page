sudo apt-get update && sudo apt-get install -y gnupg && sudo apt-get install -y gawk

cd /tmp && git clone https://github.com/sobolevn/git-secret.git git-secret
cd git-secret && sudo make build && PREFIX="/usr/local" sudo make install && cd /tmp

echo ${GPG_PRIVATE_KEY} | base64 --decode > gpg_private.key

gpg --batch --import gpg_private.key

cd /home/circleci/project

git secret tell ${GPG_UID}
git secret reveal -p ${GPG_PASSPHRASE}
rm ./.circleci/deploy.sh.secret