import React from "react";
import { versions } from "./Data";
import ChangelogEntryElements from "../../components/ChangeLog/ChangeLog";
import { ChangeLogFooter, ChangeLogHeader } from "../../components/ChangeLog/ChangeLog.elements";

function ChangeLogs() {
  return (
    <>
      <ChangeLogHeader>{`Changelog`}</ChangeLogHeader>

      {versions.map((version) => (
        <ChangelogEntryElements {...version} />
      ))}
      <ChangeLogFooter/>
    </>
  );
}

export default ChangeLogs;
