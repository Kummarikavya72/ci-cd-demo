
pipeline {
     agent any
    
      stages {
          stage('Clone') {
             steps {
                 echo 'Cloning repo...'
                 checkout scm
              }
           } 
            stage('Bulid Docker Image') {
               steps {
                 script {
                     dockerImage = docker.build("kummarikavya/ci-cd-demo")
                 }
              }
           }
           stage('Push to DockerHub') {
              steps {
                 withDockerRegistry([ credentialsId: 'dockerhub', url: ' ']) {
              script {
                 dockerImage.push("latest")
              }
           }
        }
     }
     stage('deploy') {
        steps {
          echo 'App would be deployed here!'
         }
       }
    }
  }
