export const projects = [
  {
    slug: "cloud-native-microservices-platform",
    title: "Cloud-Native Microservices Platform",
    subtitle: "Production-grade Kubernetes platform with CI/CD and observability",
    description: "Short description used in card and overview.",
    category: "DevOps / SRE",
    thumbnail: "/projects/project1-thumb.png",
    technologies: ["Go", "React", "Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana", "Trivy"],
    gallery: [
      {
        src: "/projects/project1-dashboard.png",
        alt: "Application dashboard screenshot",
        caption: "Application dashboard with real-time metrics",
      },
      {
        src: "/projects/project1-pipeline.png",
        alt: "Jenkins pipeline view",
        caption: "CI/CD pipeline with automated tests and security scans",
      },
      {
        src: "/projects/project1-k8s.png",
        alt: "Kubernetes cluster overview",
        caption: "Kubernetes cluster running multiple microservices",
      },
      {
        src: "/projects/project1-grafana.png",
        alt: "Grafana monitoring dashboard",
        caption: "Grafana dashboard showing SLIs and error budgets",
      },
    ],
    architecture: {
      image: "/projects/project1-architecture.png",
      description: "The architecture consists of a Git repository triggering Jenkins pipelines that build Docker images, push them to a container registry, and deploy to Kubernetes. Prometheus scrapes metrics from all services, Grafana visualizes them, and Trivy scans images for vulnerabilities.",
    },
    implementation: {
      cicd: {
        title: "CI/CD Pipeline",
        content: "Implemented a multibranch Jenkins pipeline using Jenkinsfile. Stages include lint, unit tests, build, Docker image build, Trivy vulnerability scan, SonarQube analysis, push to registry, and deployment to staging/production with approval gates. ArgoCD is used for GitOps-based deployment.",
        commands: [
          "jenkinsfile",
          "docker build -t myapp:latest .",
          "trivy image --severity HIGH,CRITICAL myapp:latest",
        ],
      },
      kubernetes: {
        title: "Kubernetes Configuration",
        content: "Deployed microservices as Kubernetes Deployments with HPA, Services, Ingress with TLS termination, NetworkPolicies for east-west traffic control, and ResourceQuotas. Used Helm charts for packaging and Kustomize for environment overlays.",
        commands: [
          "helm upgrade --install myapp ./chart",
          "kubectl apply -k overlays/production",
        ],
      },
      security: {
        title: "Security Hardening",
        content: "Integrated Trivy and SonarQube into CI to catch vulnerabilities early. Enforced pod security standards (restricted), used Sealed Secrets for secrets management, and implemented RBAC with least privilege. Regular security audits with kube-bench and kube-hunter.",
        commands: [
          "trivy fs --scanners vuln,secret .",
          "kubectl apply -f networkpolicy.yaml",
        ],
      },
      observability: {
        title: "Observability Stack",
        content: "Set up Prometheus with ServiceMonitors, Grafana dashboards for application metrics, Loki for log aggregation, and Tempo for tracing. Defined SLIs (latency, error rate, saturation) and SLOs with alerting rules.",
        commands: [
          "kubectl port-forward svc/prometheus 9090:9090",
          "curl http://localhost:9090/api/v1/query?query=up",
        ],
      },
      infrastructure: {
        title: "Infrastructure as Code",
        content: "Provisioned the entire cloud environment using Terraform modules: VPC, subnets, EKS cluster, node groups, RDS, and S3 buckets. Used Terragrunt for DRY configurations and state management in remote S3 backend with DynamoDB locking.",
        commands: [
          "terraform plan -var-file=prod.tfvars",
          "terraform apply -auto-approve",
        ],
      },
    },
    challenges: [
      {
        title: "Pod crash-loop due to memory leak",
        problem: "Backend service pods were restarting repeatedly in production, causing intermittent 5xx errors.",
        investigation: "Checked `kubectl get pods` showed CrashLoopBackOff. `kubectl describe pod` revealed OOMKilled. `kubectl logs` indicated high memory usage before crash.",
        rootCause: "A memory leak in the application code caused the container to exceed its memory limit.",
        solution: "Temporarily increased memory limit, added profiling to identify leak, and fixed the code. Then reverted to lower limits and added HPA based on memory usage.",
        result: "Pods stable, no OOMKilled events in 30 days.",
        lessonLearned: "Set proper resource limits and implement memory profiling in CI to catch regressions early.",
      },
      {
        title: "Intermittent database connectivity",
        problem: "Services sometimes lost connection to the database, causing transaction failures.",
        investigation: "Examined network policies, pod logs, and database metrics. Found connection pool exhaustion during peak loads.",
        rootCause: "Connection pool size was too small, and connections were not being released properly due to a bug.",
        solution: "Increased pool size and fixed connection leak. Added pgbouncer as a connection pooler in front of PostgreSQL.",
        result: "No connection timeouts after fix; p95 latency improved by 40%.",
        lessonLearned: "Always monitor connection pool metrics and set sensible timeouts.",
      },
    ],
    metrics: [
      { value: "99.95%", label: "Availability" },
      { value: "180 ms", label: "P95 Latency" },
      { value: "3", label: "Deployments per week" },
      { value: "0", label: "Critical vulnerabilities" },
    ],
    github: "https://github.com/yourusername/project1",
    demo: "https://demo.example.com",
  },
  // Add more projects...
];