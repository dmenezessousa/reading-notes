# **So, what is Git?**

## Snapshots

Git is a DVCS that stores data in a file system made up of snapshots. Each time you save a changed version of your project — called commit — Git creates a snapshot of the file and stores a reference to it. If the file has not changed, Git only stores a reference to the already-stored identical version of it.

## Local Operations

Git mostly relies on local operations because most necessary information can be found in local resources. This allows for process expediency because a project’s history resides on the local disk, eliminating the need to fetch history information from the server, and allowing one to continue work on a project even when not online or on a VPN.

## Tracking Changes

Every single change applied to any file or directory is tracked by Git. And, as the gatekeeper, Git will always detect file corruption or loss of information in transit.

## Loss of Data

Git is set up to greatly minimize the possibility of irreversible damage to files, such as accidentally lost data. Git makes it extremely difficult for a snapshot of your file that is committed to be lost.

## States

Files in Git can reside in three main states: committed, modified and staged.

> Committed

Data is securely stored in a local database

> Modified

File has been changed but not committed to the database

> Staged

Flagged a file’s changed version to be committed in the next snapshot

---

# Getting Started

## Download Git

### Terminal

- The simplest method for installing Git on a Mac (for Mavericks 10.9 and above) is running Git from the Terminal. If Git is not installed, you will see a prompt for installation.

### Git Website

- You can also download Git by visiting this link and following the posted directions:

http://git-scm.com/download

## Initial Customization

Type the following into Terminal or Command Line:

- git config --global user.name "Jane Smith"

- git config --global user.email "example@email.com"

To confirm that you have the correct settings, enter the following command:

- git config --global user.name (should return Jane Smith)

- git config --global user.email (should return example@email.com)

## Getting Help

There are three ways to get more information on a particular command, by accessing the manual:

- git help command

- git command --help

- man git-command

## Check File Status

To determine the state of files, utilize the git status command:

- $ git status

On branch master

nothing to commit, working directory clean

\*This information indicates which branch you’re on (we will cover branches in a later section) and states “working directory clean,” which means that files have tracked or modified status at the moment. Also, no untracked files are present because Git has not listed any.

### Tracking and Staging a New File

Single File

### Track one file only by using the following format:

- git add filename
  All Files

### Track all files in a repository by using the following command:

- $ git add \*

\*After using these commands, files are tracked and staged for committing.

After adding a new file called EXAMPLE, you would see information regarding changes to be committed when using the git status command:

- $ git status

On branch master

### Changes to be committed:

(use "git reset HEAD ..." to unstage)

- new file: EXAMPLE
  This information tells us that there are changes to be committed and that the file has been staged.

### Committing a File

- After staging one or multiple files, you should commit the changes and record what you did within the commit message:

- $ git commit -m “made change x,y,z”
  \*This step has committed changes for the file or files (you can have one commit message for multiple files, if applicable) to the HEAD.

### Committing All Changes

- $ git commit -a
  \*This command commits a snapshot of all modifications to tracked files in the working directory.

Pushing Changes

Next, you would push changes to a remote repository. We will discuss remote repositories in more depth in the next section. For now, we will look at a general overview of pushing changes to remotes.

### Example:

- $ git push origin master
  \*This command pushes changes from the local “master” branch to the remote repository named “origin”.

\*For cloned repositories, Git will automatically give the name “origin” to the server from which you cloned and the name “master” to your local repository. However, these names can be changed by the user.

![Gitone](gitone.png)

## ![Gittwo](gittwo.png)

[Back to Home](README.md)

Check out my [GitHub Portfolio](https://github.com/dmenezessousa/)
