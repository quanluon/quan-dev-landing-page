import type { Locale } from "@/lib/i18n/routing";

export const dictionaries = {
  vi: {
    metadata: {
      title: "Hồng Quân Dev - Web, Backend & Automation",
      description:
        "Website, web app, backend API, automation và AI/OCR cho doanh nghiệp nhỏ, startup và remote teams.",
    },
    header: {
      brand: "Hồng Quân Dev",
      cta: "Trao đổi dự án",
      nav: {
        services: "Dịch vụ",
        projects: "Dự án",
        ai: "AI/OCR",
        contractor: "Contractor",
        contact: "Liên hệ",
      },
    },
    footer: {
      brand: "Hồng Quân Dev",
      copyright: "© 2025 Hồng Quân Dev. Reliable web, backend and automation work.",
      note: "Làm rõ nhu cầu, xây đúng phần cần thiết, bàn giao để bạn dùng được.",
    },
    common: {
      learnMore: "Tìm hiểu thêm",
      viewProjects: "Xem dự án",
      viewAll: "Xem tất cả",
      sendRequest: "Gửi yêu cầu",
      discussProject: "Trao đổi dự án",
      contactDiscuss: "Liên hệ trao đổi",
    },
    form: {
      name: "Họ tên *",
      email: "Email *",
      interestPlaceholder: "Chọn nhu cầu của bạn",
      message: "Mô tả ngắn về dự án, mục tiêu và thời gian mong muốn...",
      sending: "Đang gửi...",
      submit: "Gửi yêu cầu",
      success: "Đã gửi yêu cầu. Tôi sẽ phản hồi sớm nhất có thể.",
      fallbackError: "Có lỗi xảy ra, vui lòng thử lại.",
      privacy: "Thông tin của bạn được bảo mật và chỉ dùng để trao đổi công việc.",
    },
    home: {
      eyebrow: "Backend, automation & practical software",
      title: "Xây dựng website, backend và web app ổn định cho doanh nghiệp nhỏ.",
      intro:
        "Tôi giúp bạn xây hệ thống chạy ổn định phía sau: website rõ ràng, backend dễ bảo trì, automation tiết kiệm thao tác và AI/OCR khi thật sự cần.",
      subIntro:
        "Hồng Quân Dev phù hợp với doanh nghiệp nhỏ, startup và remote teams cần một người làm kỹ thuật nói rõ, làm gọn và bàn giao dễ tiếp quản.",
      servicesTitle: "Dịch vụ chính",
      servicesDescription:
        "Không chỉ làm giao diện. Tôi tập trung cả phần chạy phía sau: API, dữ liệu, tích hợp, vận hành và những phần tự động hóa giúp công việc nhẹ hơn.",
      techTitle: "Công nghệ sử dụng",
      techDescription:
        "Stack được chọn theo bài toán: đủ chắc để vận hành, đủ gọn để team nhỏ vẫn tiếp quản được.",
      projectsTitle: "Dự án theo năng lực",
      projectsDescription:
        "Một vài dạng hệ thống tôi đã từng tham gia xây dựng, được viết lại theo năng lực để không lộ thông tin nhạy cảm.",
      workflowTitle: "Cách tôi làm việc",
      ctaTitle: "Bạn đang cần xây hệ thống ổn định?",
      ctaDescription: "Gửi vài dòng về nhu cầu, tôi sẽ phản hồi với hướng triển khai phù hợp.",
    },
    services: {
      title: "Dịch vụ kỹ thuật số",
      description:
        "Từ website rõ ràng đến backend, automation và xử lý tài liệu. Mỗi giải pháp được chọn theo nhu cầu, không làm phức tạp khi chưa cần.",
      processTitle: "Quy trình làm việc đơn giản, minh bạch",
      ctaTitle: "Bạn cần giải pháp vừa đủ?",
      ctaDescription:
        "Hãy kể tôi nghe vấn đề đang gặp. Tôi sẽ đề xuất hướng làm rõ phạm vi, dễ triển khai và phù hợp ngân sách.",
    },
    projects: {
      eyebrow: "Case studies ẩn danh",
      title: "Dự án theo năng lực",
      description:
        "Các case study được viết lại theo domain và năng lực kỹ thuật, tránh public thông tin nhạy cảm của khách hàng hoặc công ty cũ.",
      filters: ["All", "Backend", "AI/OCR", "Web app"],
      ctaTitle: "Có bài toán tương tự cần trao đổi?",
      ctaDescription:
        "Bạn không cần chuẩn bị đặc tả hoàn chỉnh. Chỉ cần mô tả vấn đề hiện tại, tôi sẽ giúp tách scope và đề xuất hướng làm vừa đủ.",
    },
    ai: {
      eyebrow: "OCR, extraction & document search",
      title: "Biến tài liệu scan/PDF thành dữ liệu có thể dùng được.",
      description:
        "Nếu doanh nghiệp đang nhập liệu thủ công từ hồ sơ, hóa đơn, chứng từ hoặc biểu mẫu, tôi có thể giúp xây luồng OCR, trích xuất dữ liệu và tìm kiếm tài liệu rõ ràng hơn.",
      primaryCta: "Trao đổi bài toán tài liệu",
      secondaryCta: "Xem case study",
      useCasesTitle: "Phù hợp khi bạn có nhiều tài liệu cần xử lý",
      useCasesDescription:
        "Không phải bài toán nào cũng cần AI. Trang này dành cho các trường hợp tài liệu đang làm chậm quy trình vận hành.",
      flowTitle: "Luồng triển khai đề xuất",
      ctaTitle: "Bạn có tài liệu mẫu cần kiểm tra?",
      ctaDescription:
        "Gửi mô tả ngắn về loại tài liệu và dữ liệu cần lấy ra. Tôi sẽ giúp đánh giá hướng làm trước khi bắt đầu build.",
    },
    about: {
      title: "Hồng Quân Dev",
      intro:
        "Hộ kinh doanh CNTT do Lương Hồng Quân vận hành, tập trung vào website, web app, backend API, automation và remote contractor.",
      mainTitle: "Không chỉ làm web đẹp. Phần chạy phía sau cũng phải rõ.",
      mainDescription:
        "Tôi phù hợp với các dự án cần một người hiểu cả sản phẩm lẫn kỹ thuật: giao diện đủ dễ dùng, API rõ ràng, database có tổ chức, tích hợp bên thứ ba và deploy để go live.",
      technicalTitle: "Kỹ thuật thực tế",
      technicalDescription:
        "Đã từng làm các luồng booking, payment, notification, marketplace, inventory, báo cáo và xử lý tài liệu.",
      workingTitle: "Cách làm rõ ràng",
      workingDescription:
        "Trao đổi thẳng về scope, rủi ro, thời gian và những phần nên làm trước để tiết kiệm chi phí.",
      businessTitle: "Thông tin kinh doanh",
      notes: [
        "Làm rõ nhu cầu trước khi chọn stack hoặc bắt đầu code.",
        "Ưu tiên hệ thống chạy ổn định, dễ bảo trì và dễ theo dõi.",
        "Bàn giao gọn để bạn hoặc team khác vẫn tiếp quản được.",
      ],
      business: [
        ["Tên:", "Hộ kinh doanh Hồng Quân Dev"],
        ["Lĩnh vực:", "Lập trình máy tính, dịch vụ CNTT"],
        ["Mã số hộ kinh doanh:", "Đang cập nhật"],
        ["Địa chỉ kinh doanh:", "Đang cập nhật"],
      ],
    },
    contractor: {
      eyebrow: "Remote backend / fullstack contractor",
      title: "Hỗ trợ backend và fullstack thực tế cho remote teams.",
      description:
        "I can join your team as a practical backend/fullstack contractor who cares about clear communication, maintainable code and stable delivery.",
      support:
        "Hỗ trợ startup và product teams xây API, database, integrations, automation và production fixes mà team có thể tiếp tục vận hành.",
      fitTitle: "Phù hợp khi team cần",
      contactTitle: "Liên hệ & trao đổi dự án",
      availability: "Available for new projects",
      profileRole: "Backend / Fullstack Developer",
      chips: ["UTC+7", "English communication", "Long-term friendly"],
    },
    contact: {
      title: "Kể tôi nghe về dự án của bạn",
      description:
        "Bạn chỉ cần mô tả vấn đề hiện tại, mục tiêu mong muốn và thời gian dự kiến. Tôi sẽ phản hồi với hướng triển khai rõ ràng, vừa đủ và dễ bắt đầu.",
      infoTitle: "Thông tin liên hệ",
      processTitle: "Quy trình hợp tác",
    },
  },
  en: {
    metadata: {
      title: "Hong Quan Dev - Web, Backend & Automation",
      description:
        "Websites, web apps, backend APIs, automation and AI/OCR systems for small businesses, startups and remote teams.",
    },
    header: {
      brand: "Hong Quan Dev",
      cta: "Discuss a project",
      nav: {
        services: "Services",
        projects: "Projects",
        ai: "AI/OCR",
        contractor: "Contractor",
        contact: "Contact",
      },
    },
    footer: {
      brand: "Hong Quan Dev",
      copyright: "© 2025 Hong Quan Dev. Reliable web, backend and automation work.",
      note: "Clarify the problem, build what matters, and hand over work your team can actually use.",
    },
    common: {
      learnMore: "Learn more",
      viewProjects: "View projects",
      viewAll: "View all",
      sendRequest: "Send request",
      discussProject: "Discuss a project",
      contactDiscuss: "Contact me",
    },
    form: {
      name: "Name *",
      email: "Work email *",
      interestPlaceholder: "Choose what you need",
      message: "Briefly describe the project, goals and expected timeline...",
      sending: "Sending...",
      submit: "Send request",
      success: "Request sent. I will get back to you as soon as possible.",
      fallbackError: "Something went wrong. Please try again.",
      privacy: "Your information is kept private and used only for project discussion.",
    },
    home: {
      eyebrow: "Backend, automation & practical software",
      title: "Reliable websites, backend systems and web apps for small teams.",
      intro:
        "I help you build the parts that need to work behind the scenes: clear websites, maintainable backend APIs, useful automation and AI/OCR only when it truly helps.",
      subIntro:
        "Hong Quan Dev is a good fit for small businesses, startups and remote teams that need practical engineering, clear communication and handover-friendly delivery.",
      servicesTitle: "Core services",
      servicesDescription:
        "Not just interface work. I focus on the system behind it: APIs, data, integrations, deployment and automation that reduces manual work.",
      techTitle: "Technology stack",
      techDescription:
        "The stack is chosen for the real problem: stable enough for production, simple enough for a small team to maintain.",
      projectsTitle: "Capability-based projects",
      projectsDescription:
        "A few types of systems I have worked on, rewritten by capability so sensitive details stay private.",
      workflowTitle: "How I work",
      ctaTitle: "Need a stable system built?",
      ctaDescription: "Send a short note about what you need. I will reply with a practical direction.",
    },
    services: {
      title: "Technical services",
      description:
        "From clear websites to backend, automation and document processing. Each solution is shaped around the real need, without making things heavier than necessary.",
      processTitle: "A simple, transparent workflow",
      ctaTitle: "Need the right-sized solution?",
      ctaDescription:
        "Tell me what is not working today. I will help shape a clear scope that is practical to build and maintain.",
    },
    projects: {
      eyebrow: "Anonymized case studies",
      title: "Capability-based projects",
      description:
        "These case studies are rewritten by domain and technical capability, without exposing sensitive client or former company details.",
      filters: ["All", "Backend", "AI/OCR", "Web app"],
      ctaTitle: "Have a similar problem to discuss?",
      ctaDescription:
        "You do not need a full spec. Describe the current problem and I can help break it into a practical scope.",
    },
    ai: {
      eyebrow: "OCR, extraction & document search",
      title: "Turn scanned documents and PDFs into usable data.",
      description:
        "If your team is manually entering data from records, invoices, forms or internal documents, I can help build OCR, extraction and search workflows that fit your process.",
      primaryCta: "Discuss a document workflow",
      secondaryCta: "View case study",
      useCasesTitle: "Useful when documents slow down operations",
      useCasesDescription:
        "Not every document workflow needs AI. This page is for real cases where manual document handling is costing time.",
      flowTitle: "Suggested implementation flow",
      ctaTitle: "Have a sample document to review?",
      ctaDescription:
        "Send a short description of the document type and fields you need. I can help assess the direction before building.",
    },
    about: {
      title: "Hong Quan Dev",
      intro:
        "A registered IT business run by Luong Hong Quan, focused on websites, web apps, backend APIs, automation and remote contractor work.",
      mainTitle: "Not just good-looking websites. The backend should be clear too.",
      mainDescription:
        "I am a good fit for projects that need both product sense and technical depth: usable interfaces, clear APIs, organized databases, integrations and production deployment.",
      technicalTitle: "Practical engineering",
      technicalDescription:
        "I have worked on booking, payment, notification, marketplace, inventory, reporting and document-processing flows.",
      workingTitle: "Clear way of working",
      workingDescription:
        "I discuss scope, risks, timeline and what should be built first in plain language.",
      businessTitle: "Business information",
      notes: [
        "Clarify the need before choosing a stack or writing code.",
        "Prioritize stable systems that are easy to maintain and observe.",
        "Hand over work in a way another team can continue.",
      ],
      business: [
        ["Name:", "Hong Quan Dev business household"],
        ["Field:", "Computer programming and IT services"],
        ["Business code:", "To be updated"],
        ["Business address:", "To be updated"],
      ],
    },
    contractor: {
      eyebrow: "Remote backend / fullstack contractor",
      title: "Practical backend and fullstack support for remote teams.",
      description:
        "I can join your team as a practical backend/fullstack contractor who cares about clear communication, maintainable code and stable delivery.",
      support:
        "I help startups and product teams build APIs, databases, integrations, automation and production fixes that the team can keep running.",
      fitTitle: "Good fit when your team needs",
      contactTitle: "Contact & project discussion",
      availability: "Available for new projects",
      profileRole: "Backend / Fullstack Developer",
      chips: ["UTC+7", "English communication", "Long-term friendly"],
    },
    contact: {
      title: "Tell me about your project",
      description:
        "Share the current problem, goal and expected timeline. I will reply with a clear and practical direction.",
      infoTitle: "Contact information",
      processTitle: "Collaboration flow",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
