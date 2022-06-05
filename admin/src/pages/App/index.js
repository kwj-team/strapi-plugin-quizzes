/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '@strapi/helper-plugin';
import { I18nextProvider } from "@kwj-team/react-quiz-components";
import pluginId from '../../pluginId';
import HomePage from '../HomePage';
import i18n from './i18n';

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <div>
        <I18nextProvider i18n={i18n}>
          <Switch>
            <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
            <Route component={NotFound} />
          </Switch>
        </I18nextProvider>
      </div>
    </Suspense>
  );
};

export default App;
