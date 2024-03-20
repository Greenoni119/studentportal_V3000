import { buttonVariants } from "@/components/ui/button";
import { getStudentPortalItem } from "@/lib/api";
import Link from "next/link";

export default async function PortalItemPage({ params }) {
  let portalItem = null;

  try {
    portalItem = await getStudentPortalItem(params.item);
    console.log(`Params: `, params);
    console.log(`Full Portal Item:`, portalItem);
  } catch (error) {
    console.error("Error fetching portal item:", error);
  }

  return (
    <main>
      {portalItem ? (
        <div className="container mx-auto prose-xl py-16">
          <h1>{portalItem.softwareTitle}</h1>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href={portalItem.loginUrl}
          >
            Access {portalItem.softwareTitle}
          </Link>
          <p>Info Slug: {portalItem.featured}</p>
          <p>Description: {portalItem.description}</p>
          {portalItem.logo && portalItem.logo.url ? (
            <img
              src={portalItem.logo.url}
              alt={`${portalItem.softwareTitle} logo`}
            />
          ) : null}
          {/* Assuming infoPageContent is rich text, displaying it might require parsing */}
        </div>
      ) : (
        <p>Portal item not found or failed to load.</p>
      )}
    </main>
  );
}
