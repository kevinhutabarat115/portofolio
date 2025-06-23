// src/pages/ProjectsPage.js
import React from 'react';

function ProjectsPage() {
  return (
    <div className="main-content text-center p-8">
      <h2 className="text-4xl font-bold text-white mb-6">Projects</h2>

      <div className="text-left text-gray-300 max-w-3xl mx-auto space-y-10">
        {/* Project 1 - Phincon (Now) */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            TDW BAU Operation | MYTELKOMSEL APP & WEB
          </h3>
          <p className="italic mb-4">
            PT Phincon – Consultant/DevOps Engineer for Telkomsel | July 2024 – Present
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Developed Telkomsel solutions to support business needs.</li>
            <li>Deployed production workloads via Jenkins on AWS infrastructure and monitored service success rate with grafana and datadog.</li>
            <li>Managed BAU daily team operations and activities.</li>
            <li>Modified existing Jenkins jobs for business-driven changes.</li>
            <li>Provisioned AWS ECR repositories using Terraform.</li>
            <li>Troubleshooted issues across SIT, UAT, FUT, NFT, and Production environments.</li>
            <li>Created Jenkins jobs to generate CSV files from MySQL and deliver to Bank Indonesia servers.</li>
            <li>Support Migrate the Workflow Deployment for 200+ service of Mytelkomsel App and Mytelkomsel Web from existing using Jenkins CICD to Gitlab CICD Pipeline that use helm.</li>
            <li>Built Helm job injectors to add labels/annotations to services using Kustomize.</li>
            <li>Manage and create a standart dockerfile for app developer that use node js and nginx web server for web application</li>
          </ul>
        </div>

        {/* Project 2 - Personal */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            DevSecOps Personal Project | Node.js + Kubernetes Stack
          </h3>
          <p className="italic mb-4">
            Personal Project | May 2025
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Deployed a simple Node.js application to a local Kubernetes cluster using Minikube.</li>
            <li>Explored Google Kubernetes Engine (GKE) features including Workload Identity, ingress via Cloud DNS, and integration with Google Cloud monitoring.</li>
            <li>Installed and configured observability stack including Grafana, Prometheus, and ELK Stack (Elasticsearch, Logstash, Kibana).</li>
            <li>Implemented auto-scaling using KEDA (Kubernetes Event-driven Autoscaling).</li>
            <li>Exposed services to the internet using Ngrok tunnel for demonstration and testing purposes.</li>
            <li>Demonstrated end-to-end infrastructure setup from local code to production-like Kubernetes deployment.</li>
          </ul>
        </div>

        {/* Project 3 - Akulaku */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Migration Infra On-Prem to Alibaba Cloud | Internal Portal & Company Profile Website
          </h3>
          <p className="italic mb-4">
            PT Akulaku Finance Indonesia | November 2023 – July 2024
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Collaborated with Developer, SRE, DBA, and QA to plan and execute migration from on-premise to Alibaba Cloud.</li>
            <li>Provisioned ECS instances for development and production environments in Alibaba Cloud.</li>
            <li>Configured CLB (Classic Load Balancer) and NACLs to isolate network access for internal office-only websites.</li>
            <li>Set up DNS records for internal portal website hosted on Alibaba Cloud.</li>
            <li>Configured Alibaba OSS and scripted automation to transfer static files to OSS.</li>
          </ul>
        </div>

        {/* Project 4 - Phincon (Past) */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            TDW BAU Operation | MYTELKOMSEL APP & WEB
          </h3>
          <p className="italic mb-4">
            PT Phincon – Junior Consultant/DevOps Engineer for Telkomsel | January 2022 – November 2023
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Troubleshot, analyzed, and identified root causes of issues in MyTelkomsel App & Web.</li>
            <li>Deployed and monitored code from Git to production environments for both mobile and web apps.</li>
            <li>Created and managed automation scripts and Jenkins jobs for operational and deployment purposes.</li>
            <li>Maintained and configured tools including Ansible, PM2, NGINX, Redis, and JFrog Artifactory.</li>
            <li>Documented SOPs and Root Cause Analysis (RCA) reports for client review.</li>
            <li>Supported application testing in Pre-Production and Production environments.</li>
            <li>Generated and presented daily performance and issue reports to stakeholders.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
