import { Bell, Home, Package, Settings, ShoppingBag, Users } from "lucide-react";
import type { Locale } from "@/lib/i18n/routing";

const sidebar = [Home, Users, ShoppingBag, Package, Settings];

export function DashboardMockup({ locale = "vi" }: { locale?: Locale }) {
  const labels = {
    title: locale === "vi" ? "System snapshot" : "System snapshot",
    revenue: locale === "vi" ? "Doanh thu" : "Revenue",
    orders: locale === "vi" ? "Đơn hàng" : "Orders",
    customers: locale === "vi" ? "Khách hàng" : "Customers",
    growth: locale === "vi" ? "so với tháng trước" : "vs last month",
    flow: locale === "vi" ? "Luồng xử lý gần nhất" : "Recent processing flow",
    job: locale === "vi" ? "Trạng thái job" : "Job status",
    done: locale === "vi" ? "Hoàn thành" : "Done",
    processing: locale === "vi" ? "Đang xử lý" : "Processing",
  };

  return (
    <div className="relative mx-auto w-full max-w-[620px] border border-[#c4c6cf] bg-white md:rounded-xl">
      <div className="grid min-h-[410px] grid-cols-[78px_1fr] overflow-hidden md:rounded-xl">
        <aside className="border-r border-[#c4c6cf] bg-[#f2f4f6] p-5">
          <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-md bg-[#00091b] font-mono text-sm font-bold text-white">
            HQ
          </div>
          <div className="space-y-4">
            {sidebar.map((Icon, index) => (
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-md ${
                  index === 0 ? "bg-[#d6e3ff] text-[#1a365d]" : "text-[#74777f]"
                }`}
                key={index}
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </aside>
        <section className="p-6 md:p-8">
          <div className="mb-7 flex items-center justify-between">
            <h3 className="font-display text-xl font-semibold text-[#00091b]">{labels.title}</h3>
            <div className="flex items-center gap-4">
              <Bell className="h-5 w-5 text-[#43474e]" />
              <div className="h-9 w-9 rounded-full border border-[#c4c6cf] bg-[#e6e8ea]" />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [labels.revenue, "128,450,000đ", "+ 12.5%"],
              [labels.orders, "356", "+ 8.2%"],
              [labels.customers, "1,245", "+ 15.3%"],
            ].map(([label, value, growth]) => (
              <div className="rounded-md border border-[#c4c6cf] bg-white p-4" key={label}>
                <p className="mono-label text-[#74777f]">{label}</p>
                <p className="mt-2 font-display text-xl font-semibold text-[#00091b]">{value}</p>
                <p className="mt-2 text-xs font-semibold text-[#006c49]">{growth} {labels.growth}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-[1.3fr_1fr]">
            <div className="rounded-md border border-[#c4c6cf] bg-white p-5">
              <p className="mb-5 text-sm font-bold text-[#00091b]">{labels.flow}</p>
              <div className="flex h-32 items-end gap-3">
                {[32, 40, 58, 50, 70, 88].map((height, index) => (
                  <div className="flex h-full flex-1 flex-col items-center justify-end gap-2" key={index}>
                    <div
                      className="w-full rounded-t-sm bg-[#1a365d]"
                      style={{ height: `${height}%` }}
                    />
                    <span className="text-[10px] text-[#74777f]">T{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-[#c4c6cf] bg-white p-5">
              <p className="mb-4 text-sm font-bold text-[#00091b]">{labels.job}</p>
              <div className="mx-auto h-24 w-24 rounded-full bg-[conic-gradient(#006c49_0_72%,#1a365d_72%_90%,#e0e3e5_90%)] p-5">
                <div className="h-full w-full rounded-full bg-white" />
              </div>
              <div className="mt-4 space-y-2 text-xs text-[#43474e]">
                <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#006c49]" />{labels.done} 72%</p>
                <p><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#1a365d]" />{labels.processing} 18%</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function ApiMockup() {
  return (
    <div className="rounded-lg border border-[#c4c6cf] bg-[#00091b] p-6 font-mono text-sm text-[#eff1f3]">
      <div className="mb-4 flex items-center gap-3">
        <span className="rounded-sm bg-[#006c49]/30 px-2 py-1 text-[#9af2c5]">GET</span>
        <span>/api/v1/products</span>
      </div>
      <pre className="overflow-hidden text-xs leading-6 text-[#eff1f3]">
{`{
  "status": "success",
  "data": [
    { "id": 1, "name": "Sản phẩm A" }
  ]
}`}
      </pre>
    </div>
  );
}
