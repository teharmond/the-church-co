import {
  SettingsDescription,
  SettingsHeader,
  SettingsSection,
  SettingsTitle,
} from "@the-church-co/ui/settings-sections";
import PcoLogo from "@the-church-co/ui/icons/pco-logo";

export default function page() {
  const integrations = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
  }));

  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Integrations</SettingsTitle>
          <SettingsDescription>
            Manage your integration connections.
          </SettingsDescription>
        </SettingsHeader>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="flex flex-col gap-2 rounded-xl border p-4 shadow-md"
            >
              <div className="flex items-center gap-2 text-sm font-medium">
                <PcoLogo fill="#2266F7" className="h-5 w-5" />
                Planning Center
              </div>
              <div className="text-sm text-muted-foreground">
                Connect your Planning Center account to keep your data in sync
                and use PCO data on your website.
              </div>
            </div>
          ))}
        </div>
      </SettingsSection>
    </div>
  );
}
