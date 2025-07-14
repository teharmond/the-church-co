"use client";

import {
  SettingsSection,
  SettingsHeader,
  SettingsTitle,
  SettingsContent,
  SettingsRowTitle,
  SettingsRow,
  SettingsRowDescription,
  SettingsRowDetails,
  SettingsRowAction,
  SettingsDescription,
} from "@the-church-co/ui/settings-sections";
import { Input } from "@the-church-co/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@the-church-co/ui/select";
import { Button } from "@the-church-co/ui/button";
import { Calendar } from "@the-church-co/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@the-church-co/ui/popover";
import { cn } from "@the-church-co/ui/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import Duplicate from "@the-church-co/ui/icons/duplicate";
import Trash from "@the-church-co/ui/icons/trash";
import CalendarIcon from "@the-church-co/ui/icons/calendar";

export default function CampusSettingsPage() {
  const [status, setStatus] = useState("draft");
  const [access, setAccess] = useState("public");
  const [isScheduled, setIsScheduled] = useState(false);
  const [openDate, setOpenDate] = useState<Date>();
  const [closeDate, setCloseDate] = useState<Date>();

  const handleSchedulingChange = (value: string) => {
    if (value === "scheduled") {
      setIsScheduled(true);
    } else {
      setIsScheduled(false);
      setOpenDate(undefined);
      setCloseDate(undefined);
    }
  };

  return (
    <div className="mt-6 w-full space-y-6 p-5">
      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Campus Settings</SettingsTitle>
          <SettingsDescription>
            Configure your campus details and visibility.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow larger isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Campus Name</SettingsRowTitle>
              <SettingsRowDescription>
                The display name for this campus location.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="Campus Name" defaultValue="Main Campus" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>URL Slug</SettingsRowTitle>
              <SettingsRowDescription>
                The URL slug for this campus location.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Input placeholder="URL Slug" defaultValue="main-campus" />
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Status</SettingsRowTitle>
              <SettingsRowDescription>
                Control whether this campus is visible on your website.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Access</SettingsRowTitle>
              <SettingsRowDescription>
                Who can view this campus on your website.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select value={access} onValueChange={setAccess}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select access level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="members">Members Only</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow larger>
            <SettingsRowDetails>
              <SettingsRowTitle>Scheduling</SettingsRowTitle>
              <SettingsRowDescription>
                Schedule when this campus becomes available.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction larger>
              <Select
                value={isScheduled ? "scheduled" : "always"}
                onValueChange={handleSchedulingChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select scheduling" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="always">Always Available</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>
            </SettingsRowAction>
          </SettingsRow>
          {isScheduled && (
            <>
              <SettingsRow larger>
                <SettingsRowDetails>
                  <SettingsRowTitle>Open Date</SettingsRowTitle>
                  <SettingsRowDescription>
                    When this campus becomes available.
                  </SettingsRowDescription>
                </SettingsRowDetails>
                <SettingsRowAction larger>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !openDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="h-4 w-4" />
                        {openDate ? format(openDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={openDate}
                        onSelect={setOpenDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </SettingsRowAction>
              </SettingsRow>
              <SettingsRow larger>
                <SettingsRowDetails>
                  <SettingsRowTitle>Close Date</SettingsRowTitle>
                  <SettingsRowDescription>
                    When this campus becomes unavailable.
                  </SettingsRowDescription>
                </SettingsRowDetails>
                <SettingsRowAction larger>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !closeDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {closeDate ? format(closeDate, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={closeDate}
                        onSelect={setCloseDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </SettingsRowAction>
              </SettingsRow>
            </>
          )}
        </SettingsContent>
        <div className="mt-2 flex justify-end">
          <Button>Save Changes</Button>
        </div>
      </SettingsSection>

      <SettingsSection>
        <SettingsHeader>
          <SettingsTitle>Campus Actions</SettingsTitle>
          <SettingsDescription>
            Manage this campus with quick actions.
          </SettingsDescription>
        </SettingsHeader>
        <SettingsContent>
          <SettingsRow isFirstRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Duplicate Campus</SettingsRowTitle>
              <SettingsRowDescription>
                Create a copy of this campus with all its settings.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction>
              <Button variant="outline" className="gap-2">
                <Duplicate />
                Duplicate
              </Button>
            </SettingsRowAction>
          </SettingsRow>
          <SettingsRow>
            <SettingsRowDetails>
              <SettingsRowTitle>Delete Campus</SettingsRowTitle>
              <SettingsRowDescription>
                Permanently remove this campus. This action cannot be undone.
              </SettingsRowDescription>
            </SettingsRowDetails>
            <SettingsRowAction>
              <Button variant="destructive" className="gap-2">
                <Trash />
                Delete
              </Button>
            </SettingsRowAction>
          </SettingsRow>
        </SettingsContent>
      </SettingsSection>
    </div>
  );
}
