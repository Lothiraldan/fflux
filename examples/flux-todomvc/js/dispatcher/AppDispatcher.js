/*
 * Copyright (c) 2014, Facebook, Inc.
 * Copyright (c) 2015, Kureev Alexey
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 */

var Dispatcher = require('fflux').Dispatcher;

module.exports = new Dispatcher();
