# Focus on... controlled shift-left | Cycode Docs

Source: https://docs.cycode.com/knowledge-base/focus-on-articles/focus-on-controlled-shift-left

---

# Focus on... controlled shift-left

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/knowledge-base/focus-on-articles/focus-on-controlled-shift-left.md "Edit this page")

Updated on May 12, 2024 • Published on May 5, 2024

* * *

## Introduction [Copied!](#introduction "Copy link to this section")

Managing application security is not a one-person job; in fact, we know today that application security is a team sport, and as such, you need to make sure all hands are on-deck to improve your company’s security position.

One way that Cycode helps you do this is through what we call a **controlled shift-left** - making your developers a part of the team -\*\* without blocking them\*\* and **without having an impact on their ability develop and release**, so that you’re able to maintain a security-first **and** developer-first mindset.

## Stage 1: Gradual implementation [Copied!](#stage-1-gradual-implementation "Copy link to this section")

Let’s begin by focusing on one violation category, in this case, hardcoded secrets, and one development team to onboard.

1.  First, enable the **Pull Request Status Check** toggle at the top of the settings page (otherwise none of the other settings will be available).
2.  Next, in the PR Request Status Check table, select the repositories you want to work on.  
    Note that there is a hierarchy to the repositories by organization, so choose either one organization or even only one repository in the organization. Remember to align this with the team that’s being brought on board - choose one or more repositories depending on the team and how the team works with its repositories.

![](https://files.readme.io/05f8b0b-image.png) 3. At this stage, **don’t** apply (don’t select) the following settings:

1.  Don’t enable block merge (yet)
2.  Don’t automatically scan new repositories that are added
3.  Don’t automatically block merge for new repositories that are added
4.  Next, go to the Threshholds section, and apply the following:

![](https://files.readme.io/b068285-image.png)

1.  In the **Fail status-check / block-merge** field, select **Always pass** (note that even though you didn’t select to block merges in step 3, this is an extra measure to ensure that none of the PRs fail).
2.  In the **Only add comments** field,**we recommend selecting High**, so that only violations that are High and Critical will require the developer to take action (and anything less won’t apply).
3.  Next, scroll down to the Advanced settings. Here you’ll select which actions to allow the user to take:

![](https://files.readme.io/f5ab220-image.png)

We recommend selecting **all** of the following options:

1.  Mark secret as false positive - Allows the developer to notify that the detected secret is not a secret and, therefore, a false detection.
2.  Mark secret as revoked - Allows the developer to notify that the detected secret is a true detection, however, the secret detected is no longer active.
3.  Ignore secret in this pull request only - Allows the developer to ignore detection without determining if this detection is true or false. Ignoring only in the current pull request means that the secret will be detected again if it appears.
4.  Ignore secret in all repositories - Allows the developer to notify that while the secret is a true secret (and, therefore, not a false detection), it does not pose a risk and can be ignored across the organization.

There are two additional configurations we recommend enabling:

1.  Skip scans for draft PRs
2.  Alert once a developer comments on secret vulnerabilities - select this option and then specify which alerting system to use for the alerts (email or Slack).
3.  Save these settings by clicking **Save Changes**.

Now that you’ve configured the settings, get your pilot team involved and use Cycode with these settings.

### How do I know how my developers are doing? [Copied!](#how-do-i-know-how-my-developers-are-doing "Copy link to this section")

To track how the developers are doing, go to the Developer Audit in the settings, where you’ll be able to see all the comments that the developers added. You can now view the comments in the UI and can mark them as reviewed. You can also see additional information on the actions and filter the actions. See [Developer Audit](/developer-experience/security-administrators/monitor-developer-activity/developer-audit) for details.

## Strategies for moving forward [Copied!](#strategies-for-moving-forward "Copy link to this section")

Once your pilot team has gotten comfortable working with these settings, remember to collect feedback to see how they’re doing. To move forward, here are some strategies we suggest:

### Stage 2: Recommended [Copied!](#stage-2-recommended "Copy link to this section")

1.  Enable additional organizations and repositories - **at the same level** - and again, without blocking anything.
2.  Only alert on high and critical violations.
3.  Verify that everyone understands the process and then begin expanding to the entire company.
4.  Remember to only apply to one violation category, in this case, secrets.
5.  Verify that no one is being blocked and that you’re getting alerts on the important stuff.
6.  Track the Developer Audit to see if developers commented any violations found. Too many comments for false positive or ignore completely can mean that the detections create noise for the developers that you should address.

### Stage 3: Moving the ante up [Copied!](#stage-3-moving-the-ante-up "Copy link to this section")

You’re now ready to level up your control shift left posture. This is optional, but the idea here is to try to teach developers **not to push vulnerabilities**!

1.  Apply **block merge** to **critical** violations (only) instead of always pass.
2.  For the pilot team, set the block merge configuration in the repositories selection. Note that block merge is supported for GitHub and GitLab SCMs (Gitlab requires the “ultimate” package for block merge support). Block pull/merge requests in other SCMs may require configuration for the SCM that Cycode currently cannot control.

### Stage 4: Block merge for entire organizations and repositories [Copied!](#stage-4-block-merge-for-entire-organizations-and-repositories "Copy link to this section")

Following the successful implementation of the pull requests scanning across the organization and the successful trial of enabling the block merge option for your pilot team, you’ll be ready to enable the block merge option across the organization.

Enabling pull requests scanning and the block merge option means you’re fully onboarded! Well done.

### Stage 5: Steady state and no problems [Copied!](#stage-5-steady-state-and-no-problems "Copy link to this section")

This stage is not mandatory but pushes even more shift left from security to developers, placing an emphasis on the developer’s role. See if this works for your company or not.

1.  Reduce the severity level for comments to medium and potentially low - note that this will mean more alerts, so take this into consideration.
2.  For block merge, also reduce to high or even medium - this will depend on the team and your security goals.
3.  Reduce the ability of developers to ignore alerts by removing some or all of the comment actions available.

### Stage 6: Expand to other scanners [Copied!](#stage-6-expand-to-other-scanners "Copy link to this section")

Now that everyone is fully onboard with Cycode secrets detection, you can expand the controlled shift-left to the other categories (you can also choose to do this after stage 1 or 2, depending on your company’s needs).

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
