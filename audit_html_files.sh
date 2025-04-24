#!/bin/bash
# HTML File Audit Script for VarioResearch
# Task ID: vario_audit_loop_001
# Date: 2025-04-23
# Pass: 1

echo "=== VarioResearch HTML Audit (Pass 1) ==="
echo "Date: $(date)"
echo "Task ID: vario_audit_loop_001"
echo ""

# Create log directory if it doesn't exist
mkdir -p .roo/logs/repair

# Log file for findings
LOG_FILE=".roo/logs/repair/audit_findings_pass1.txt"
echo "# HTML Audit Pass 1 Findings" > $LOG_FILE
echo "Date: $(date)" >> $LOG_FILE
echo "" >> $LOG_FILE

# Find all HTML files
html_files=$(find ./pages -name "*.html")
total_files=$(echo "$html_files" | wc -l)
echo "Found $total_files HTML files to audit"
echo "" >> $LOG_FILE

# Process each file
for file in $html_files; do
  echo "Auditing: $file"
  echo "## File: $file" >> $LOG_FILE
  
  # Check for broken links (../../projects/operation_foresight/ pattern)
  if grep -n "href=\"../../projects/operation_foresight/" "$file" > /dev/null; then
    echo "  - Potentially broken links (../../projects/operation_foresight/ pattern)" 
    echo "### Potentially broken links:" >> $LOG_FILE
    grep -n "href=\"../../projects/operation_foresight/" "$file" >> $LOG_FILE
    echo "" >> $LOG_FILE
  fi
  
  # Check for unclosed tags (common pattern: missing </div>, </span>, </a>, etc.)
  if grep -A1 "<div" "$file" | grep -v ">" > /dev/null; then
    echo "  - Possible unclosed tags" 
    echo "### Possible unclosed tags:" >> $LOG_FILE
    grep -n -A1 "<div" "$file" | grep -v ">" >> $LOG_FILE
    echo "" >> $LOG_FILE
  fi
  
  # Check for missing document references
  if grep -n "cite.*</cite>" "$file" > /dev/null; then
    echo "  - Citation references to check" 
    echo "### Citation references to verify:" >> $LOG_FILE
    grep -n "cite.*</cite>" "$file" >> $LOG_FILE
    echo "" >> $LOG_FILE
  fi
  
  # Check for markdown artifacts that weren't properly rendered
  if grep -n "[\*\#\`\_\~]" "$file" > /dev/null; then
    echo "  - Possible markdown artifacts" 
    echo "### Possible markdown artifacts:" >> $LOG_FILE
    grep -n "[\*\#\`\_\~]" "$file" >> $LOG_FILE
    echo "" >> $LOG_FILE
  fi
  
  # Check for HTML validation warnings (simplified)
  if grep -n "<!-" "$file" > /dev/null; then
    echo "  - HTML comments (may include FIXME/TODO)" 
    echo "### HTML comments:" >> $LOG_FILE
    grep -n "<!-" "$file" >> $LOG_FILE
    echo "" >> $LOG_FILE
  fi
  
  echo "" >> $LOG_FILE
done

echo ""
echo "Audit complete! Results saved to $LOG_FILE"
echo "Please review findings and update the audit pass log accordingly."