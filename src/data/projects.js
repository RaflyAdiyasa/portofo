export const projects = [
  {
    slug: "assigngo",
    title: "AssignGO",
    subtitle: "Application platform with cloud infrastructure and automated CI/CD",
    description:
      "A web application supported by cloud infrastructure on Google Cloud Platform, with infrastructure provisioning through Terraform and automated build and deployment using Cloud Build.",
    category: "Cloud / DevOps",

    thumbnail: "/projects/assigngo/thumb.png",

    technologies: [
      "Node.js",
      "Terraform",
      "Google Cloud Platform",
      "Cloud Build",
      "MySQL",
      "PostgreSQL",
    ],

    gallery: [
      {
        src: "/projects/assigngo/application.png",
        alt: "AssignGO application",
        caption: "AssignGO application interface",
      },
      {
        src: "/projects/assigngo/terraform.png",
        alt: "Terraform infrastructure configuration",
        caption: "Infrastructure provisioning using Terraform",
      },
      {
        src: "/projects/assigngo/cloud-build.png",
        alt: "Google Cloud Build pipeline",
        caption: "Automated CI/CD pipeline using Cloud Build",
      },
    ],

    architecture: {
      image: "/projects/assigngo/architecture.png",
      description:
        "The application uses Node.js APIs with cloud infrastructure provisioned using Terraform. Google Cloud services are used to support the application and managed database infrastructure, while Cloud Build automates the build and deployment workflow.",
    },

    implementation: {
      infrastructure: {
        title: "Infrastructure as Code",
        content:
          "Provisioned cloud infrastructure using Terraform, including networking components and managed database resources. Infrastructure configuration was defined as code to make the environment reproducible and easier to maintain.",
        commands: [
          "terraform init",
          "terraform plan",
          "terraform apply",
        ],
      },

      cicd: {
        title: "CI/CD Pipeline",
        content:
          "Implemented an automated CI/CD workflow using Google Cloud Build. The pipeline builds the application and automates the deployment process after changes are pushed to the repository.",
        commands: [
          "gcloud builds submit",
          "gcloud builds list",
        ],
      },

      backend: {
        title: "Backend API",
        content:
          "Developed backend APIs using Node.js and integrated the application with relational databases including MySQL and PostgreSQL.",
        commands: [
          "npm install",
          "npm run build",
          "npm start",
        ],
      },
    },

    challenges: [
      {
        title: "Managing cloud infrastructure consistently",
        problem:
          "Manually configuring cloud resources makes environments harder to reproduce and maintain.",
        investigation:
          "Reviewed the infrastructure requirements and identified networking and managed database resources that needed to be provisioned consistently.",
        rootCause:
          "Infrastructure configuration was dependent on manual configuration and was not fully represented as code.",
        solution:
          "Used Terraform to define and provision the required cloud infrastructure.",
        result:
          "Infrastructure configuration became reproducible and easier to maintain.",
        lessonLearned:
          "Infrastructure as Code helps reduce configuration drift and makes infrastructure changes easier to review.",
      },
      {
        title: "Automating application delivery",
        problem:
          "Manual application build and deployment increases repetitive operational work.",
        investigation:
          "Identified the build and deployment steps that could be automated whenever application changes were pushed.",
        rootCause:
          "The deployment workflow required manual execution of multiple steps.",
        solution:
          "Implemented a CI/CD workflow using Google Cloud Build.",
        result:
          "Application delivery became more consistent and automated.",
        lessonLearned:
          "Automating repetitive deployment tasks improves consistency and reduces manual errors.",
      },
    ],

    metrics: [
      {
        value: "IaC",
        label: "Terraform",
      },
      {
        value: "CI/CD",
        label: "Cloud Build",
      },
      {
        value: "GCP",
        label: "Cloud Infrastructure",
      },
    ],

    github: "https://github.com/yourusername/assigngo",
    demo: "",
  },

  {
    slug: "helpdesk-ticketing-api",
    title: "Helpdesk Ticketing API",
    subtitle: "Containerized backend API with monitoring and health checks",
    description:
      "A helpdesk ticketing backend API built with Go and Fiber, using MySQL, Redis, and MinIO, with containerization and application observability using Prometheus and Grafana.",
    category: "Backend / DevOps",

    thumbnail: "/projects/helpdesk-ticketing/thumb.png",

    technologies: [
      "Go",
      "Fiber",
      "GORM",
      "MySQL",
      "Redis",
      "MinIO",
      "Docker",
      "Docker Compose",
      "Prometheus",
      "Grafana",
      "Node Exporter",
      "Redis Exporter",
    ],

    gallery: [
      {
        src: "/projects/helpdesk-ticketing/swagger.png",
        alt: "Helpdesk Ticketing API documentation",
        caption: "API documentation and endpoint testing",
      },
      {
        src: "/projects/helpdesk-ticketing/docker.png",
        alt: "Docker Compose environment",
        caption: "Containerized application environment",
      },
      {
        src: "/projects/helpdesk-ticketing/grafana.png",
        alt: "Grafana monitoring dashboard",
        caption: "Application and infrastructure monitoring",
      },
      {
        src: "/projects/helpdesk-ticketing/prometheus.png",
        alt: "Prometheus monitoring",
        caption: "Metrics collection using Prometheus",
      },
    ],

    architecture: {
      image: "/projects/helpdesk-ticketing/architecture.png",
      description:
        "The backend API is built with Go and Fiber and communicates with MySQL for persistent data, Redis for caching or supporting application operations, and MinIO for object/file storage. The application is containerized with Docker Compose and monitored using Prometheus, Grafana, and exporters.",
    },

    implementation: {
      backend: {
        title: "Backend API",
        content:
          "Developed a REST API using Go and Fiber with a structured application architecture. GORM is used for database interaction and Swagger is used for API documentation.",
        commands: [
          "go mod download",
          "go run .",
        ],
      },

      containerization: {
        title: "Containerization",
        content:
          "Containerized the backend application and its supporting services using Docker Compose, including MySQL, Redis, and MinIO.",
        commands: [
          "docker compose build",
          "docker compose up -d",
          "docker compose ps",
        ],
      },

      health: {
        title: "Health & Readiness",
        content:
          "Implemented health and readiness endpoints so the application state can be checked by infrastructure and deployment tooling.",
        commands: [
          "curl http://localhost:8080/health",
          "curl http://localhost:8080/readiness",
        ],
      },

      observability: {
        title: "Monitoring & Observability",
        content:
          "Integrated Prometheus and Grafana for monitoring. Node Exporter and Redis Exporter are used to expose infrastructure and Redis metrics for visualization and troubleshooting.",
        commands: [
          "docker compose up -d prometheus grafana",
          "curl http://localhost:9090",
        ],
      },

      storage: {
        title: "Object Storage",
        content:
          "Integrated MinIO as an S3-compatible object storage service for handling application files.",
        commands: [
          "docker compose up -d minio",
        ],
      },
    },

    challenges: [
      {
        title: "Running multiple services locally",
        problem:
          "The application depends on multiple infrastructure services including MySQL, Redis, and MinIO.",
        investigation:
          "Identified the application and infrastructure dependencies that needed to run together during development.",
        rootCause:
          "Running each dependency manually made the development environment harder to reproduce.",
        solution:
          "Defined the application and supporting services using Docker Compose.",
        result:
          "The complete development environment can be started consistently using Docker Compose.",
        lessonLearned:
          "Container orchestration with Docker Compose simplifies reproducible multi-service development environments.",
      },
      {
        title: "Application visibility",
        problem:
          "Application and infrastructure issues are difficult to troubleshoot without metrics.",
        investigation:
          "Identified the need to monitor application infrastructure and Redis activity.",
        rootCause:
          "Important runtime metrics were not centralized in a monitoring dashboard.",
        solution:
          "Integrated Prometheus, Grafana, Node Exporter, and Redis Exporter.",
        result:
          "Runtime metrics became available for monitoring and troubleshooting.",
        lessonLearned:
          "Observability should be considered early when designing operationally maintainable applications.",
      },
    ],

    metrics: [
      {
        value: "Go",
        label: "Backend",
      },
      {
        value: "Docker",
        label: "Containerization",
      },
      {
        value: "Prometheus",
        label: "Metrics",
      },
      {
        value: "Grafana",
        label: "Visualization",
      },
    ],

    github: "https://github.com/yourusername/helpdesk-ticketing-api",
    demo: "",
  },

  {
    slug: "ztp-multi-vendor-network-provisioning",
    title: "ZTP Multi-Vendor Network Provisioning",
    subtitle:
      "Zero Touch Provisioning workflow for multi-vendor network devices",
    description:
      "A Zero Touch Provisioning environment designed to automate the initial provisioning of network devices from multiple vendors using DHCP-based bootstrapping.",
    category: "Network Automation",

    thumbnail: "/projects/ztp/thumb.png",

    technologies: [
      "ZTP",
      "DHCP",
      "ISC-DHCP",
      "DHCP VCI",
      "Arista EOS",
      "Cumulus Linux",
      "Extreme EXOS",
      "GNS3",
      "Linux",
    ],

    gallery: [
      {
        src: "/projects/ztp/topology.png",
        alt: "ZTP network topology",
        caption: "Multi-vendor network topology simulated with GNS3",
      },
      {
        src: "/projects/ztp/dhcp.png",
        alt: "DHCP configuration",
        caption: "DHCP configuration for device provisioning",
      },
      {
        src: "/projects/ztp/arista.png",
        alt: "Arista device provisioning",
        caption: "ZTP workflow for Arista EOS",
      },
      {
        src: "/projects/ztp/cumulus.png",
        alt: "Cumulus Linux provisioning",
        caption: "ZTP workflow for Cumulus Linux",
      },
    ],

    architecture: {
      image: "/projects/ztp/architecture.png",
      description:
        "The ZTP environment uses DHCP-based device identification and provisioning. Vendor-specific DHCP Vendor Class Identifier information is used to provide the appropriate bootstrapping configuration for different network operating systems. The environment was simulated using GNS3.",
    },

    implementation: {
      dhcp: {
        title: "DHCP-Based Provisioning",
        content:
          "Configured ISC DHCP to provide device-specific provisioning information based on DHCP Vendor Class Identifier (VCI).",
        commands: [
          "sudo systemctl status isc-dhcp-server",
          "sudo journalctl -u isc-dhcp-server",
        ],
      },

      multiVendor: {
        title: "Multi-Vendor Support",
        content:
          "Designed provisioning workflows for different network operating systems including Arista EOS, Cumulus Linux, and Extreme EXOS.",
        commands: [
          "show version",
          "show interfaces status",
        ],
      },

      simulation: {
        title: "Network Simulation",
        content:
          "Used GNS3 to build and test the ZTP topology in a controlled environment before applying the provisioning workflow to network devices.",
        commands: [
          "ip addr",
          "ip route",
        ],
      },
    },

    challenges: [
      {
        title: "Supporting different network vendors",
        problem:
          "Different network operating systems require different provisioning information and bootstrapping behavior.",
        investigation:
          "Analyzed vendor-specific DHCP identification information and provisioning requirements.",
        rootCause:
          "ZTP behavior differs between network vendors and operating systems.",
        solution:
          "Used DHCP Vendor Class Identifier information to distinguish devices and provide vendor-specific provisioning parameters.",
        result:
          "A multi-vendor ZTP workflow could be tested in the simulated environment.",
        lessonLearned:
          "Automation workflows need to account for vendor-specific behavior when dealing with heterogeneous infrastructure.",
      },
    ],

    metrics: [
      {
        value: "3",
        label: "Network OS",
      },
      {
        value: "ZTP",
        label: "Automated Provisioning",
      },
      {
        value: "GNS3",
        label: "Network Simulation",
      },
    ],

    github: "https://github.com/yourusername/ztp-multi-vendor",
    demo: "",
  },
];