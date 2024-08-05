export default function Feature() {

  const title = "Design Emails in Figma"
  const subtitle = "Leverage our complete Design System for transactional emails, crafted in Figma to streamline your workflow and accelerate email customization"
  const pretitle = "Marketers"
  const li1 = "Elements, Components and Templates"
  const li2 = "Variants and Design Tokens"
  const li3 = "Brand Consistency and Quick Customization"

  return (
    <div className="px-6 max-w-[1000px] mx-auto mt-6 grid md:grid-cols-2">
      <div>
        <div className="inline-flex text-center px-4 py-1 text-sm bg-purple-600/30 rounded-md ">
          <p className="--pretitle text-purple-300">{pretitle}</p>
        </div>
      <h2 className="--h2title my-2">{title}</h2>
      <p className="--para mt-2">{subtitle}</p>
      <ul className="--para --li mt-4 space-y-4">
        <li><i class="bi bi-box-fill --li-icon"></i>{li1}</li>
        <li><i class="bi bi-eyedropper --li-icon"></i>{li2}</li>
        <li><i class="bi bi-arrow-repeat --li-icon"></i> {li3}</li>
      </ul>
      </div>
      
      <div className="bg-blue-500"></div>
    </div>
  )
}