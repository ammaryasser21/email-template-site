import React from 'react';
import { useParams } from 'react-router-dom';
import './EmailTemplate.css';

const EmailTemplate = () => {
  const { templateId, subId } = useParams();

  const renderTemplateContent = () => {
    if (templateId == 'template1') {
      return (
        <>
          <p>This is the content of the email template 1.</p>
          {!subId && (
            <>
              <p>This is the content of the email template 1 sub template 1.</p>
              <p>This is the content of the email template 1 sub template 2.</p>
            </>
          )}
          {subId == 'sub1' && <p>This is the content of the email template 1 sub template 1.</p>}
          {subId == 'sub2' && <p>This is the content of the email template 1 sub template 2.</p>}
        </>
      );
    } else if (templateId == 'template2') {
      return (
        <>
          <p>This is the content of the email template 2.</p>
          {!subId && (
            <>
              <p>This is the content of the email template 2 sub template 1.</p>
              <p>This is the content of the email template 2 sub template 2.</p>
            </>
          )}
          {subId == 'sub1' && <p>This is the content of the email template 2 sub template 1.</p>}
          {subId == 'sub2' && <p>This is the content of the email template 2 sub template 2.</p>}
        </>
      );
    }
  };

  return (
    <div className="email-template">
      {renderTemplateContent()}
    </div>
  );
};

export default EmailTemplate;
