# Secrets in images (OCR) | Cycode Docs

Source: https://docs.cycode.com/scanners/pipeline-security/secrets/how-does-cycode-detect-secrets/secrets-in-images-ocr

---

# Secrets in images (OCR)

[](https://gitlab.com/cycodehq/documentation/cycode_docs/-/blob/main/src/content/scanners/pipeline-security/secrets/how-does-cycode-detect-secrets/secrets-in-images-ocr.md "Edit this page")

Updated on Nov 12, 2025 • Published on Sep 3, 2025

* * *

## Overview [Copied!](#overview "Copy link to this section")

Secrets can get exposed outside the code and configuration files. Developers and employees may share screenshots via collaboration platforms that contain credentials.

Cycode’s OCR-based detection can find secrets that are embedded in images, ensuring that your security coverage extends beyond text-based or binary formats. Each finding is assigned an OCR confidence score, which reflects the accuracy of the text extraction from the image.

The key benefits of OCR-based detection are:

*   Reducing hidden exposure risks by detecting non-text-based assets.
    
*   Providing visual context with image previews and highlights.
    
*   Enabling prioritization using the OCR confidence score.
    

### Supported image types [Copied!](#supported-image-types "Copy link to this section")

Cycode supports OCR-based secret detection for the following image formats:

*   PNG
    
*   JPG/JPEG
    

### Supported integrations [Copied!](#supported-integrations "Copy link to this section")

Secrets in images can be detected in:

*   Slack
    
*   Microsoft Teams
    
*   Confluence DataCenter
    
*   Jira DataCenter
    
*   Sharepoint Online
    

## View secrets detected with OCR [Copied!](#view-secrets-detected-with-ocr "Copy link to this section")

Cycode provides visible guidance in the platform as described below, to help with the remediation process.

### OCR confidence score [Copied!](#ocr-confidence-score "Copy link to this section")

Each violation detected in an image includes an OCR confidence score, which indicates the likelihood that the finding is a secret. The score is a percentage, and the higher the score the stronger the confidence.

The OCR confidence score is displayed in the following places:

*   Secret violation card - in the **Overview** tab > below the file location and image preview of the secret value
    
*   Secret violation card - in the **Risk analysis** tab > summary tiles
    

### Shared image tag [Copied!](#shared-image-tag "Copy link to this section")

Cycode automatically labels validated findings with a **Shared image** tag. The tag is visible in the following places:

*   Violations page - when grouped by **Secret value**, show the **Secret tags** column
    
*   Secret violation card - in the **Overview** tab >**General info** section
    
*   Secret value card - in the **Overview** tab >**Where** section >**Location** tags
    

You can also filter the table in the Violations view by the **Shared image** tag.

Was this article helpful?

Yes No

Thanks for your feedback!

## Help us improve this article

×

Need more information Inaccurate or irrelevant content Difficult to understand Missing/broken link Others

Characters: 0/255

Cancel Submit
