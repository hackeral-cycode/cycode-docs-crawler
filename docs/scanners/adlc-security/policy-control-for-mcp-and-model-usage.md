# Policy control for MCP and model usage | Cycode Docs

Source: https://docs.cycode.com/scanners/adlc-security/policy-control-for-mcp-and-model-usage

---

# Policy control for MCP and model usage

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/adlc-security/policy-control-for-mcp-and-model-usage.md "Edit this page")

* * *

## Overview [Copied!](#overview "Copy link to this section")

Control which **AI models** and **MCP (Model Context Protocol) servers** are allowed in your development environment. Cycode discovers them across the ADLC (AI Development Lifecycle), lets you mark each as Authorized or Unauthorized, and generates violations automatically when unauthorized assets are detected.

Note

**Scope:** This feature applies to Models and MCPs only.

The feature has three parts:

1.  An authorization model applied to every Model and MCP.
2.  Automatic violation generation under the **ADLC Security** policy category, with backfill and auto-resolution.
3.  A complete audit trail of authorization changes and the resulting violation lifecycle events.

## AI & ML Inventory — Models and MCPs [Copied!](#ai--ml-inventory--models-and-mcps "Copy link to this section")

### Authorization status [Copied!](#authorization-status "Copy link to this section")

Every discovered Model and MCP carries an **Authorization status**. The status reflects the organization’s governance decision for the asset and determines whether it produces violations.

Status

Description

Default

**Not Reviewed**

Discovered but not yet evaluated. Signals that a new Model or MCP has entered the environment and needs attention.

Yes

**Authorized**

Reviewed and approved. No violations are generated.

No

**Unauthorized**

Reviewed and rejected. Triggers automated violation generation for all detections of the asset.

No

All newly discovered assets default to **Not Reviewed** — no asset is implicitly approved or rejected before a deliberate decision.

### Where the status is displayed [Copied!](#where-the-status-is-displayed "Copy link to this section")

*   **Inventory pages (Models / MCPs)** — each row shows the current status in the **Authorization status** column and can be changed inline from the dropdown.
*   **Asset card** — the status appears as a dropdown in the top-right corner of any Model or MCP card.

### Bulk authorization changes [Copied!](#bulk-authorization-changes "Copy link to this section")

On the **Models** and **MCPs** inventory pages, select multiple assets and apply a single authorization decision to the entire selection. Recommended when onboarding the feature or classifying a family of related assets at scale.

## ADLC Security policy and violations [Copied!](#adlc-security-policy-and-violations "Copy link to this section")

Cycode ships an out-of-the-box policy that generates violations for every detection of a Model or MCP whose status is **Unauthorized**.

### Policy [Copied!](#policy "Copy link to this section")

*   **Name:** Unauthorized AI Entity
*   **Category / Subcategory:** ADLC Security / Machine Learning & AI
*   **Default severity:** High

Severity and other settings can be adjusted from **Policies → ADLC Security**, like any other Cycode policy.

### Finding Unauthorized AI Entity violations [Copied!](#finding-unauthorized-ai-entity-violations "Copy link to this section")

Distinguish models from MCPs by adding the **Tool Category** and **Tool Name** columns from the Columns picker (under the **ADLC Security** group):

*   **Tool Category** — shows **AI Model** or **MCP Server**.
*   **Tool Name** — shows the identifier (for example, `gemma-3-270m`, `playwright`).

### Violation detail [Copied!](#violation-detail "Copy link to this section")

Field

What it shows

**Header**

The Locations component, showing where the file from the evidence path was detected.

**File content**

Code preview of the line(s) where the asset was detected.

**Description**

A human-readable summary of the finding and a **How to remediate this violation?** link.

**General Info**

Tool Category, Tool Name, File Path, and First detected.

**Evidence Path**

A graph tracing the path from the violation to the underlying asset (organization → repository → file → asset).

### Reverting authorization [Copied!](#reverting-authorization "Copy link to this section")

If a Model or MCP is changed from **Unauthorized** back to **Authorized**:

*   New violations stop being generated.
*   Open violations for that asset are auto-transitioned from **Open** to **Resolved**, with the status change message _“Entity authorization changed to Authorized”_.
*   The audit trail is preserved.

## Audit trail [Copied!](#audit-trail "Copy link to this section")

All authorization changes and their downstream effects are recorded under **Settings → Audit Logs**. For more information, go to [Cycode Audit Logs](/cycode-settings/audit-logs/) . Two event types are captured:

**Authorization Status events** — recorded whenever an asset’s status is set or changed.

*   **Resource Type:** Authorization Status
*   **Action:** Created (initial set) or Modified (subsequent change)
*   **Description:** the status or transition — for example, `Authorization Status Unauthorized`, or `Authorization Status Unauthorized → Authorized`.

**Violation lifecycle events from auto-resolution** — recorded when violations are resolved as a result of a status change.

*   **Resource Type:** Violation
*   **Action:** Modified
*   **Description:** `Status Open → Resolved`, with **Status Change Message** `Entity authorization changed to Authorized`.

## Recommended workflow [Copied!](#recommended-workflow "Copy link to this section")

1.  **Review.** Open the **Models** and **MCPs** inventory pages. New assets default to Not Reviewed.
2.  **Classify in bulk.** Apply Authorized or Unauthorized decisions to groups of related assets. Marking an asset Unauthorized immediately generates violations for all existing and future detections.
3.  **Refine.** Adjust individual assets from their asset cards as needed.
4.  **Triage.** Work through the ADLC Security violations list. Reversed authorization decisions auto-resolve the corresponding open violations.
5.  **Audit.** Review **Settings → Audit Logs** for the history of changes and the resulting violation lifecycle events.

## Behavioral reference [Copied!](#behavioral-reference "Copy link to this section")

Scenario

Result

Newly discovered Model or MCP

Status is Not Reviewed. No violations generated.

Asset marked Authorized

No violations generated. Any open violations for this asset are auto-resolved.

Asset marked Unauthorized

Violations generated immediately for all existing and future detections, each using its original detection timestamp.

Unauthorized → Authorized

Future violations stop. Open violations auto-resolved with the message _“Entity authorization changed to Authorized”_. Audit trail preserved.

Any authorization status change

Recorded under **Settings → Audit Logs** as an Authorization Status event (Created or Modified).

Any auto-resolution of a violation

Recorded under **Settings → Audit Logs** as a Violation Modified event with the corresponding status change message.

## FAQ [Copied!](#faq "Copy link to this section")

**Which asset types are covered?** Only **Models** and **MCPs**. Other inventory sub-views (Infrastructures, Code agents) are not in scope.

**Are violations always generated for Unauthorized assets?** Yes. There is no separate on/off control — marking an asset Unauthorized immediately produces violations for all existing and future detections.

**Do Not Reviewed or Authorized assets produce violations?** No. Only assets marked **Unauthorized** produce violations.

**What happens to violations if I change an asset back to Authorized?** Open violations are auto-resolved with the message _“Entity authorization changed to Authorized”_. The audit trail is preserved.

**Can I change the severity of the Unauthorized AI Entity policy?** Yes — from **Policies → ADLC Security**, like any other policy. Default is **High**.

**Where can I see who changed an asset’s status and when?** **Settings → Audit Logs**, filtered by **Resource Type: Authorization Status**. Set **Include Cycode automation** to **Yes** to also see the auto-resolved violations that resulted.

**How do I distinguish models from MCPs in the violations list?** Add the **Tool Category** and **Tool Name** columns from the Columns picker (under the **ADLC Security** group).

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
