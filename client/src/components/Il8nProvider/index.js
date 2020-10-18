import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import { il8nSelector } from '../../ducks/il8n';

export const Il8nProvider = ({ children }) => {
  const { messages, locale } = useSelector(il8nSelector);
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
};
