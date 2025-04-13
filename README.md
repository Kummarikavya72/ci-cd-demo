# ci-cd-demo
task2
all the deailed work i did to complte this task 2 Launched an EC2 instance on AWS
Installed necessary tools manually:
Java (required for Jenkins)
Jenkins
Git
Docker
Enabled required ports in the EC2 security group (like 8080 for Jenkins)Installed Jenkins and Docker
Downloaded and configured Jenkins to run as a service
Verified Jenkins installation via http://<EC2-IP>:8080
Installed Jenkins plugins like:
Git Plugin
Docker Pipeline Plugin
Gave Jenkins permission to use Docker (added Jenkins user to Docker group)
created GitHub Repository
Created a new GitHub repository to store:
Application source code
Dockerfile
Jenkinsfile (CI/CD pipeline)
Committed and pushed all files to the repo
Wrote the Jenkins Pipeline (Jenkinsfile)
Created a Jenkinsfile onfigured Jenkins Job
Created a new freestyle project in Jenkins
Configured it to:
Pull code from GitHub
Use the Jenkinsfile from the repo
Trigger builds automatically on every code commit (Webhook configur
Tested the Pipeline
Pushed changes to the repo and confirmed:
Jenkins pipeline started automatically
Docker image built successfully
Container deployed and running
Took screenshots of Jenkins dashboard and pipeline run (attached below in screenshots)
