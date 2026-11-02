import { redirect } from "next/navigation";

// The about content lives on the home page now.
export default function AboutPage() {
	redirect("/#about");
}
