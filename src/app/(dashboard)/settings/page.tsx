import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Pengaturan · NusaCargo",
};

export default function SettingsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-xl font-semibold">Pengaturan</h1>

      <Card>
        <CardHeader>
          <CardTitle>Tampilan</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <p className="text-sm text-foreground/70">
            Pilih mode terang atau gelap. Pilihanmu diingat di perangkat ini.
          </p>
          <ThemeToggle />
        </CardContent>
      </Card>
    </section>
  );
}
